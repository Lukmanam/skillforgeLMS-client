import React from "react";
import InstructorCourseCard from "./InstructorCourseCard";
import InstructorCourseCardtwo from "./InstructorCourseCard";

const InstructorCourse = () => {
    return (
        <div className="container p-3 mt-12 mb-10"><b>Your Top Rated Courses</b>
      <div className="course-list flex space-x-4 p-4 mb-5">
        <InstructorCourseCard />
        <InstructorCourseCard />
        <InstructorCourseCard />
        <InstructorCourseCard />
      </div>
      <div className="container p-3 mt-8"><b>Latest Uploaded</b>
      <div className="course-list flex space-x-4 p-4 mb-10">
        <InstructorCourseCardtwo/>
        <InstructorCourseCardtwo/>
        <InstructorCourseCard/>
        <InstructorCourseCard/>

        
      </div>
       </div>
      </div>
       
    );
  };
  export default InstructorCourse;