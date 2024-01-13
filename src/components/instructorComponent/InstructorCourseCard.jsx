import React from "react";


const InstructorCourseCard = ({value}) => {

    return (
      <div className="course-card bg-white rounded-lg shadow-md overflow-hidden">
      <img src={value?.thumbnail} alt="Course" className="w-full h-52 object-cover" />
      <div className="p-4">
        <h2 className="text-xl lg:text-2xl font-semibold mb-2">{value?.courseName}</h2>
        <p className="text-sm lg:text-base text-gray-600 mb-4">{value?.courseDescription}</p>
        <p className="text-base lg:text-lg text-gray-600"><b> ₹{value?.price}</b></p>
      </div>
    </div>
    
    );
  };


  export default InstructorCourseCard