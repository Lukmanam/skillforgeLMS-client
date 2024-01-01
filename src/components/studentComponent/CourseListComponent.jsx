import React from "react";
import CourseCard from "./CourseCard";
import CourseCardtwo from "./CourseCard2";

const CourseList = () => {
    return (
        <div className="container p-3 mt-12"><b>Popular Courses</b>
      <div className="course-list flex space-x-4 p-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        
        {/* Add more CourseCard components as needed */}
      </div>
      <div className="container p-3 mt-8"><b>Latest and Updated</b>
      <div className="course-list flex space-x-4 p-4 mb-10">
        <CourseCardtwo/>
        <CourseCardtwo/>
        <CourseCardtwo/>
        <CourseCardtwo/>
        <CourseCardtwo/>
        <CourseCardtwo/>
        <CourseCardtwo/>
      </div>
       </div>
      </div>
       
    );
  };
  export default CourseList;