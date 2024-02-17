import React from "react";


const InstructorCourseCard = ({value}) => {

    return (
      <div className="course-card bg-white rounded-lg shadow-lg overflow-hidden m-2  h-auto w-64 outline outline-slate-200  ">
      <img src={value?.thumbnail} alt="Course" className="w-full h-auto object-fit" />
      <div className="p-4">
        <h2 className="text-md font-semibold mb-1">{value?.courseName}</h2>
        
        <p className="text-base md:text-md text-gray-600"><b> ₹{value?.price}</b></p>
      </div>
    </div>
    
    );
  };


  export default InstructorCourseCard