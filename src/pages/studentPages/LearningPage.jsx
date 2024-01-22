import React, { useEffect } from 'react'
import ReactPlayer from "react-player";
import { useParams } from 'react-router-dom';

import StudentNavbar from '../../components/studentComponent/StudentNavbar'
import { useSelector } from 'react-redux';

const LearningPage = () => {

    const {courseId}=useParams();
    console.log("hai");
    console.log(courseId,"this is course id in learning page");
    const { student } = useSelector((state) => state.studentReducer);
   console.log(student,"this is student");
    
    useEffect(()=>{
        courseLearn(courseId,).then((res)=>{
            console.log(res);
        }).catch((error)=>{
            console.log(error);
        })
    })






  return (
    <>
      <div>
        <StudentNavbar />
        <div className='w-full h-16 e bg-cyan-700'>
          <p className='text-2xl text-slate-200 p-3'>Course Name</p>
        </div>
        <div className='flex flex-col md:flex-row h-auto md:h-screen  bg-slate-100'>
          <div className='md:w-2/3 h-3/4 rounded-sm m-1 outline outline-cyan-700'>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=9pss7yH1w48'
              width='100%'
              height='100%'
              loop={true}
              playing={false}
              controls={true}
            />

            <div className='md:w-2/3'><p className='text-slate-900'>{}</p></div>
            <div className='md:hidden lg:block fixed bottom-4 right-4'>
              {/* Button for small screens */}
              <button className='btn bg-orange-400 text-white p-2 rounded-full'>
                Next Module
              </button>
            </div>
          </div>
          <div className='md:w-1/3 h-3/4 bg-slate-200 m-1'>
            <div className='w-6/7 m-2 rounded-lg outline outline-1 bg-white h-16'></div>
            <div className='md:block lg:hidden fixed bottom-4 right-4'>
              {/* Button for medium screens */}
              <button className='btn bg-orange-400 text-white p-2 rounded-full'>
                Next Module
              </button>
            </div>
          </div>
          <div className='hidden lg:block fixed bottom-4 right-4'>
            {/* Button for large screens */}
            <button className='btn bg-orange-400 text-white p-2 rounded-full'>
              Next Module
            </button>
          </div>
        </div>
      </div>
    </> 
  )
}

export default LearningPage
