import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { addMessage,getMessages } from '../../../../../api/messageApi';
import InputEmoji from 'react-input-emoji';
import Conversation from '../Conversation/Conversation'; // Modified Conversation component
import { fetchInstructorDetails } from '../../../../../api/chatApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';



const ChatBox = ({ chat, currentUser, setMessages, messages, socket }) => {
  const [instructorData, setinstructorData] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };
  const scroll = useRef();

  useEffect(() => {
    // scroll to bottom every time messages change
    scroll.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Storing messages in the database
  const handleSend = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) {
      return;
    }
    let newOne;
    const message = {
      senderId: currentUser,
      text: newMessage,
      chatId: chat._id,
    };
    try {
      const { data } = await addMessage(message);
      newOne = data;
      setMessages([...messages, data]);
      setNewMessage('');
    } catch (error) {
      console.log(error.message);
    }
    socket.emit('send_message', newOne);
  };

  // Getting instructor details to display
  useEffect(() => {
    const instructorId = chat?.members?.find((id) => id !== currentUser);
    const getinstructorData = async () => {
      try {
        const { data } = await fetchInstructorDetails(instructorId);
        setinstructorData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (chat !== null) getinstructorData();
  }, [chat, currentUser]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getMessages(chat._id);
        setMessages(data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (chat !== null) fetchMessages();
  }, [chat]);

  return (
    <>
      {chat ? (
        <>
          <div
            className="flex-1 p-2 sm:p-6 justify-center flex flex-col"
            style={{ maxHeight: '100vh' }}
          >
            <div className="flex sm:items-center justify-between  ">
              <div className="relative flex items-center space-x-4">
                <div className="relative">
                  <span className="absolute text-green-500 right-0 bottom-0">
                    <svg width="20" height="20">
                      <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                    </svg>
                  </span>

                  <img
                    src="../assets/chatAvatar.png"
                    alt="instructor"
                    className="w-8 sm:w-14 h-8 sm:h-14 rounded-full"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <div className="text-2xl mt-1 flex items-center">
                    <span className="text-gray-700 mr-3">{instructorData?.name}</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <hr className='m-5 border' />
            </div>


            <div
              id="messages"
              className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-1 h-screen scrolling-touch"
            >
              {messages.map((message) => (
                <div ref={scroll} key={message._id}>
                  {/* Check if the message is a video call link */}
                  {message.text.includes('https://skillforge-lms-client.vercel.app/instructor/video?roomID=') ? (
                    <div className='flex justify-center'>
                      <span
                        className="text-green-800 text-2xl cursor-pointer"
                        onClick={() => window.open(message.text, '_blank')}
                      >
                        <button className='btn btn-outline btn-accent' >Click here to join the video call <FontAwesomeIcon icon={faVideo} /> </button>
                      </span>
                    </div>
                  ) : (
                    <Conversation message={message} currentUser={currentUser} />
                  )}
                </div>
              ))}
            </div>
            <div>
              <hr className='m-5 border' />
            </div>

            <div className=" px-4 pt-4 mb-2 ">
              <div className="relative flex">


                <InputEmoji value={newMessage} onChange={handleChange} />

                <button
                  type="button"
                  onClick={handleSend}
                  className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                >
                  <span className="font-bold">Send</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-6 w-6 ml-2 transform rotate-90"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div >
        </>
      ) : (
        <div
          className=" course-card flex-1 p-2 sm:p-6 justify-center flex items-center text-green-500"
          style={{ maxHeight: '90vh', fontSize: '30px' }}
        >
          Open a chat to start conversation
        </div>
      )
      }
    </>
  );
};

ChatBox.propTypes = {
  chat: PropTypes.object,
  messages: PropTypes.array.isRequired,
  setMessages: PropTypes.func.isRequired,
  socket: PropTypes.object.isRequired,
  currentUser: PropTypes.string.isRequired,
};

export default ChatBox;
