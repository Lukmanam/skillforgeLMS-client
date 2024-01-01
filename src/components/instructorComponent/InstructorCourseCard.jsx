import React from "react";

const InstructorCourseCard = () => {
    return (
        <div className="course-card bg-white rounded-lg shadow-md overflow-hidden">
        <img src="/src/assets/deeplearning.jpg" alt="Course" className="w-full h-40 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Deep Learning And AI</h2>
          <p className="text-sm text-gray-600 mb-2">Duration: 8 months</p>
          <p className="text-sm text-gray-600"><b>Rating: 4.5</b></p>
        </div>
      </div>
    );
  };


  export default InstructorCourseCard