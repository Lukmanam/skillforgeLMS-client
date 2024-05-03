import React from 'react';
import Chat from '../../../components/chatComponents/Student/Chat/Chat';
import StudentNavbar from '../../../components/studentComponent/StudentNavbar';
const ChatPage = () => {
  return (

    <div className='overflow-hidden'>
        <StudentNavbar />
        <Chat/>
    </div>
  );
};

export default ChatPage;