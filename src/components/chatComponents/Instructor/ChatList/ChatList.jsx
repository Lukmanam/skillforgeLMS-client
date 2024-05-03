import React, { useState, useEffect } from 'react';
import { studentData } from '../../../../../api/chatApi';

const ChatList = ({ data, currentinstructorId }) => {

  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    const userId = data?.members?.find((id) => id !== currentinstructorId);
    const getUserData = async () => {
      try {
        const { data } = await studentData(userId);
        setUserDetails(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUserData();
  }, [data, currentinstructorId]);

  return (
    <div>
      <div className=' fade-eff border-b bg-slate-200'>
        {
          userDetails && (
            <div className='flex items-center bg-white hover:bg-slate-50 cursor-pointer mb-0.5 shadow-lg'>
              <div className='m-0.5 '>
                <img
                  src="../assets/chatAvatar.png"
                  alt={`Photo of ${userDetails.name}`}
                  className='w-14 h-14 rounded-full m-2 mx-auto object-cover'
                />
              </div>
              <div>
                <p className='text-lg font-semibold'>{userDetails.name}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};


export default ChatList;
