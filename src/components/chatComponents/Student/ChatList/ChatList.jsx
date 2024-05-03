import React, { useState, useEffect } from "react";
import { fetchInstructorDetails } from "../../../../../api/chatApi";

const ChatList = ({ data, currentUserId }) => {
  const [loading, setLoading] = useState(true);
  const [instructorDetails, setinstructorDetails] = useState(null);
  useEffect(() => {
    const instructorId = data?.members?.find((id) => id !== currentUserId);
    const getinstructorData = async () => {
      try {
        const { data } = await fetchInstructorDetails(instructorId);
        setinstructorDetails(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getinstructorData()
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data, currentUserId]);

  return (
    <>
      {loading ? (
        <div className="animate-pulse">
          
          <div className=" course-card container mx-auto bg-slate-200 rounded-md p-4">
            <div className="flex flex-wrap items-center">
              <div className="course-card bg-gray-300 rounded-lg outline-slate-500 shadow-lg overflow-hidden h-8  w-full lg:w-68">
              
              </div>
            </div>
          </div>
          <div className=" course-card container mx-auto bg-slate-200 rounded-md m-2 ">
            <div className="flex flex-wrap items-center">
              <div className="course-card bg-gray-200 rounded-lg outline-slate-500 shadow-lg overflow-hidden h-20  w-full lg:w-72">
              </div>
            </div>
          </div>
          <div className=" course-card container mx-auto bg-slate-200 rounded-md m-2 ">
            <div className="flex flex-wrap items-center">
              <div className="course-card bg-gray-200 rounded-lg outline-slate-500 shadow-lg overflow-hidden h-20  w-full lg:w-72">
              </div>
            </div>
          </div>
          <div className=" course-card container mx-auto bg-slate-200 rounded-md m-2 ">
            <div className="flex flex-wrap items-center">
              <div className="course-card bg-gray-200 rounded-lg outline-slate-500 shadow-lg overflow-hidden h-20  w-full lg:w-72">
              </div>
            </div>
          </div>
          <div className=" course-card container mx-auto bg-slate-200 rounded-md m-2 ">
            <div className="flex flex-wrap items-center">
              <div className="course-card bg-gray-200 rounded-lg outline-slate-500 shadow-lg overflow-hidden h-20  w-full lg:w-72">
              </div>
            </div>
          </div>
          <div className=" course-card container mx-auto bg-slate-200 rounded-md m-2 ">
            <div className="flex flex-wrap items-center">
              <div className="course-card bg-gray-200 rounded-lg outline-slate-500 shadow-lg overflow-hidden h-20  w-full lg:w-72">
              </div>
            </div>
          </div>
          <div className=" course-card container mx-auto bg-slate-200 rounded-md m-2 ">
            <div className="flex flex-wrap items-center">
              <div className="course-card bg-gray-200 rounded-lg outline-slate-500 shadow-lg overflow-hidden h-20  w-full lg:w-72">
              </div>
            </div>
          </div>
          
         
        </div>
      ) : (
        //  <div className='p-1 outline-0 outline outline-slate-200 bg-green-200 h-12 m-2 shadow-lg  cursor-pointer'></div>
        <div className="course-card p-1 outline-0 outline outline-slate-200  text-black  cursor-pointer shadow-lg mb-2">
          {instructorDetails && (
            <div className="flex items-center ">
              <div className="mr-4">
                <img
                  src="../assets/chatAvatar.png"
                  alt={`Photo of ${instructorDetails.name}`}
                  className="w-14 h-14 rounded-full mx-auto object-cover "
                />
              </div>
              <div>
                <p className="text-lg font-semibold">
                  {instructorDetails.name}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatList;
