
import React, { useEffect, useState } from 'react';
import StudentInputChat from './StudentInputChat';
import { instructorfetch } from '../../../api/instructorApi';

const Chat = ({instructorId}) => {
  const [instructor,setInstructor]=useState(null)
  
  useEffect(()=>{
    instructorfetch(instructorId).then((res)=>{
    setInstructor(res?.data?.instructor,"ins in chat");
    }).catch((error)=>{
      console.log(error);
    })
  },[])
  

  console.log("this is instructor Id in",instructorId);
  return (
    <div className='p-5'>
      <div className="sm:w-3/4 md:w-full max-h-3/4 overflow-auto  bg-white ">
        <div className="w-auto bg-slate-100 h-16 p-1">
          <div className="flex items-center p-1">
            <div className="border border-sky-700 p-[2px] rounded-full w-11 h-11">
              <img
                className="w-full h-full"
                src="../assets/chatAvatar.png"
                alt="profile"
              />
            </div>
            <div className="ml-4 sm:ml-8">
              <h4 className="text-xl">{instructor?.name}</h4>
              {/* <p className="text-sm font-light">online</p> */}
            </div>
          </div>
          <hr />
        </div>
        <div className="h-[420px] w-full bg-gray-300 overflow-scroll">
          <div className="p-4 sm:p-14">
            <div className="max-w-full sm:max-w-[40%] bg-blue-700 rounded-b-xl rounded-tl-xl ml-auto text-white p-4 mb-6">
              Hai mam
            </div>
            <div className="max-w-full sm:max-w-[40%] bg-white rounded-b-xl rounded-tr-xl text-black p-4 mb-6">
              Hai Lukman Athimannil
            </div>
           
            <div className="max-w-full sm:max-w-[40%] bg-blue-700 rounded-b-xl rounded-tl-xl ml-auto text-white p-4 mb-6">
              Helo
            </div>
            
          </div>
        </div>

        <StudentInputChat />
      </div>
    </div>
  );
};

export default Chat;

