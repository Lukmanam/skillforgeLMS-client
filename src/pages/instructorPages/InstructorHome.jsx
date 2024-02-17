import React from "react";
import InstructorNavbar from "../../components/instructorComponent/InstructorNavbar";
import InstructorCourse from "../../components/instructorComponent/InstructorCourse";
const InstructorHome=()=>{

    return(
        <>
        <InstructorNavbar/>
        <div className="items-center">
             <div className="banner bg-gray-800 text-white py-16 text-center">
        <img src="https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Courses Banner" className="mx-auto mb-2  lg:h-96 rounded-lg " />
        <h1 className="text-2xl font-bold p-1">WHY BECOME AN INSTRUCTOR WITH US? </h1>
        <p className="mt-4 text-lg">
  <b className="font-bold">|</b> Empower Others <b className="font-bold">|</b> Global Reach 
<b className="font-bold">  |</b> Earn While You Teach <b className="font-bold">|</b> Flexible Schedule <b className="font-bold"></b>
  <b className="font-bold">|</b>
</p>      </div>
        <InstructorCourse/>
        </div>
        </> 
    )
}

export default InstructorHome