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

  console.log(courses, "these are courses");

  return (
    <div className="container p-3 mt-12 bg-neutral-200">
      <b>Popular Courses</b>

      <div className="course-list flex space-x-4 p-4">
        <div className="course-list   flex flex-wrap  mx-auto mb-6">
          {courses && courses.length > 0 ? (
            courses.map((data) => <CourseCard key={data._id} value={data} />)
          ) : (
            <div className="course-list flex flex-wrap space-x-4 p-4 mb-5">
              Courses not Available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CourseList;
