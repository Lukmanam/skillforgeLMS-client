import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import CourseCardtwo from "./FavCourseCard";
import { fetchAllCourses } from "../../../api/studentApi";
import { Link } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAllCourses()
      .then((res) => {
        setLoading(false);
        setCourses(res?.data?.courses);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-7  bg-white">
      <b>Popular Courses</b>

      <div className="course-list flex space-x-4 p-2 justify-center items-center">
        {loading?(<>
          <div className="animate-pulse">
          <div className="flex flex-wrap items-center">
            <div className="course-card bg-gray-500 rounded-lg outline-slate-500 shadow-lg overflow-hidden m-2 h-auto w-full  lg:w-68"><div  className="w-full h-64"></div></div>
            <div className="course-card bg-gray-500 rounded-lg outline-slate-500 shadow-lg overflow-hidden m-2 h-auto w-full lg:w-68"><div  className="w-full h-64"></div></div>
            <div className="course-card bg-gray-500 rounded-lg outline-slate-500 shadow-lg overflow-hidden m-2 h-auto w-full lg:w-68"><div  className="w-full h-64"></div></div>
            <div className="course-card bg-gray-500 rounded-lg outline-slate-500 shadow-lg overflow-hidden m-2 h-auto w-full lg:w-68"><div  className="w-full h-64"></div></div>
            <div className="course-card bg-gray-500 rounded-lg outline-slate-500 shadow-lg overflow-hidden m-2 h-auto w-full lg:w-68"><div  className="w-full h-64"></div></div>
            <div className="course-card bg-gray-500 rounded-lg outline-slate-500 shadow-lg overflow-hidden m-2 h-auto w-full lg:w-68"><div  className="w-full h-64"></div></div>
            <div className="course-card bg-gray-500 rounded-lg outline-slate-500 shadow-lg overflow-hidden m-2 h-auto w-full lg:w-68"><div  className="w-full h-64"></div></div>
            <div className="course-card bg-gray-500 rounded-lg outline-slate-500 shadow-lg overflow-hidden m-2 h-auto w-full lg:w-68"><div  className="w-full h-64"></div></div>
            <div className="course-card bg-gray-500 rounded-lg outline-slate-500 shadow-lg overflow-hidden m-2 h-auto w-full lg:w-68"><div  className="w-full h-64"></div></div>
            <div className="course-card bg-gray-500 rounded-lg outline-slate-500 shadow-lg overflow-hidden m-2 h-auto w-full lg:w-68"><div  className="w-full h-64"></div></div>
            <div className="course-card bg-gray-500 rounded-lg outline-slate-500 shadow-lg overflow-hidden m-2 h-auto w-full lg:w-68"><div  className="w-full h-64"></div></div>
            <div className="course-card bg-gray-500 rounded-lg outline-slate-500 shadow-lg overflow-hidden m-2 h-auto w-full lg:w-68"><div  className="w-full h-64"></div></div>
            <div className="course-card bg-gray-500 rounded-lg outline-slate-500 shadow-lg overflow-hidden m-2 h-auto w-full lg:w-68"><div  className="w-full h-64"></div></div>
            <div className="course-card bg-gray-500 rounded-lg outline-slate-500 shadow-lg overflow-hidden m-2 h-auto w-full lg:w-68"><div  className="w-full h-64"></div></div>
            <div className="course-card bg-gray-500 rounded-lg outline-slate-500 shadow-lg overflow-hidden m-2 h-auto w-full lg:w-68"><div  className="w-full h-64"></div></div>
            </div>
            </div>
            </>
        ):(

        <div className="course-list   flex flex-wrap  mx-auto mb-6 ">
          {courses && courses.length > 0 ? (
            courses.map((data) => <CourseCard key={data._id} value={data} />)
          ) : (
            <div className="course-list flex flex-wrap space-x-4 p-4 mb-5 ">
              Courses not Available
            </div>
          )}
        </div>

        )}
      </div>
    </div>
  );
};
export default CourseList;
