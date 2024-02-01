import React, { useState, useEffect } from 'react';
import { fetchInstructorDetails } from '../../../../../api/chatApi';

const ChatList = ({data,currentUserId}) => {
  
  const [instructorDetails,setinstructorDetails] = useState(null);
  useEffect(()=>{
    const instructorId = data?.members?.find((id) => id !== currentUserId);
    const getinstructorData = async () => {
      try {
        const {data} = await fetchInstructorDetails(instructorId);
        setinstructorDetails(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getinstructorData();
  },[data,currentUserId]);

  return (
   <div>
      <div className='p-1 outline-2 outline outline-slate-200 bg-zinc-100'>
        {
          instructorDetails && (
            <div className='mt-4 flex items-center '>
            <div className='mr-4'>
              <img
                src="../assets/chatAvatar.png"
                alt={`Photo of ${instructorDetails.name}`}
                className='w-14 h-14 rounded-full mb-4 mx-auto object-cover'
              />
            </div>
            <div>
              <p className='text-lg font-semibold'>{instructorDetails.name}</p>
            </div>
          </div>
          )
        }
      </div>
    </div>
  );
};


export default ChatList;
