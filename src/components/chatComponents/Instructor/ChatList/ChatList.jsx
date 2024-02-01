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
      <div className=' mt-5 ml-2 border-b'>
        {
          userDetails && (
            <div className='mt-1 flex items-center '>
              <div className='mr-4'>
                <img
                  src="../assets/chatAvatar.png"
                  alt={`Photo of ${userDetails.name}`}
                  className='w-14 h-14 rounded-full mb-4 mx-auto object-cover'
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
