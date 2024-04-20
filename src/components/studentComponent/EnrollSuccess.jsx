import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StudentNavbar from "./StudentNavbar";
import { enrollToCourse } from "../../../api/studentApi";
import { Link } from 'react-router-dom';
import { getInstructor } from "../../../api/studentApi";
import { enableChat } from "../../../api/studentApi";
const EnrollSuccess = () => {
const [instructor,setInstructor]=useState(null)
const { student } = useSelector((state) => state.studentReducer);
const studentId=student._id

const {courseId}=useParams();
useEffect(()=>{
  
    getInstructor(courseId).then((res)=>{
      setInstructor(res?.data?.instructor.instructorId)
    }).catch((error)=>{
      console.log(error);
    })


  })
  useEffect(()=>{
    enrollToCourse(courseId, studentId)
    enableChat(studentId,instructor)

  })

return (
    <div>
      <StudentNavbar />
      <div className="w-full bg-sky-900 min-h-screen flex flex-col items-center justify-center">
    
        <img src="../assets/enrollSuccess.png" className="w-1/2 md:w-44 h-44 mb-8 md:mt-12" alt="Enrollment Success" />
    
        <p className="text-orange-400 text-3xl md:text-5xl text-center mb-3 md:mb-5">
          Congratulations!!
        </p>
        <p className="text-slate-100 text-lg md:text-5xl text-center mb-5">
          You have been enrolled successfully! Start your journey now.
        </p>

        <Link to={`/learn/${courseId}`}>
        <button className="btn text-slate-950 mx-4 md:mx-14">Start Learning ➡</button>
        </Link>
    
      </div>
    </div>
  );
  
  };

export default EnrollSuccess;
