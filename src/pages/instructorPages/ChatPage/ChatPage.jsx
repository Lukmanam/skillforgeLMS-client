import React from 'react';
import Chat from '../../../components/chatComponents/Instructor/Chat/Chat';
import InstructorNavbar from '../../../components/instructorComponent/InstructorNavbar';
const ChatPage = () => {
  return (
    <div className='bg-blue-50 min-h-screen overflow-hidden'>
      <InstructorNavbar/>
        <Chat/>
    </div>
  );
};

export default ChatPage;