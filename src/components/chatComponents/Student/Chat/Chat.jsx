import React, { useEffect, useState } from 'react';
import { chatData } from '../../../../../api/chatApi';
import { useSelector } from 'react-redux';
import ChatList from '../ChatList/ChatList';
import ChatBox from '../ChatBox/ChatBox';
import { io } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';



const END_POINT = "https://server.shoeniverses.online";

let socket;

const Chat = () => {
  const [conversations, setConversations] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const { student } = useSelector((state) => state.studentReducer);
    const navigate=useNavigate()
//   const { _id } = useSelector((state) => state.reducer.userReducer.user);
//   const userId = _id;

  const studentId=student._id
  useEffect(() => {
    chatData(studentId)
      .then((res) => {
        setConversations(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    socket = io(END_POINT);
    console.log("End point Connected");
  }, []);

  useEffect(() => {
    socket?.emit("setup", studentId);
    socket?.on("get-users", (users) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.disconnect();
    };
  }, [studentId]);

  useEffect(() => {
    socket.on("recieve_message", (data) => {
      if (data?.chatId === currentChat?._id) {
        const message = [...messages, data];
        setMessages(message);
      }

      const updatedConversations = conversations.map((chat) => {
        if (chat._id === data.chatId) {
          return { ...chat, lastMessage: Date.parse(data.createdAt) };
        }
        return chat;
      });

      const sortedConversations = [...updatedConversations].sort((a, b) => {
        const aTimestamp = a.lastMessage || 0;
        const bTimestamp = b.lastMessage || 0;
        return bTimestamp - aTimestamp;
      });

      setConversations(sortedConversations);
    });
  }, [messages, currentChat, conversations]);

  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== studentId);
    const online = onlineUsers.find((user) => user.studentId === chatMember);
    return online ? true : false;
  };

  return (
    <div className='bg-blue-50'>
      <div className='min-h-screen bg-blue-50 flex justify-center'>
        <div className='min-h-screen bg-blue-50'>
          <div className='w-full md:w-96 h-screen bg-white mx-auto md:me-10'>
            <div className='overflow-y-auto h-screen md:h-screen'>
              {conversations.length === 0 ? (
                <div className='text-xl text-gray-600 text-center'>
                  <p className='m-20'>No chats</p>

                </div>
              ) : (
                conversations.map((chat) => (
                  <div
                    key={chat._id}
                    onClick={() => {
                      setCurrentChat(chat);
                      socket?.emit("join room", chat._id);
                    }}
                  >
                    <ChatList data={chat}
                      currentUserId={studentId}
                      online={checkOnlineStatus(chat)}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <ChatBox
          chat={currentChat}
          currentUser={studentId}
          setMessages={setMessages}
          messages={messages}
          socket={socket}
        />
      </div>
    </div>
  );
};

export default Chat;
