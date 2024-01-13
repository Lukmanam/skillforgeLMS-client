import React from "react";
import InstructorCourseCard from "./InstructorCourseCard";
import InstructorCourseCardtwo from "./InstructorCourseCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { myCourses } from "../../../api/instructorApi";
import { useNavigate } from "react-router-dom";

const InstructorCourse = () => {
  const [course,setCourses]=useState([])
const navigate=useNavigate()
const { instructor } = useSelector((state) => state.instructorReducer);
const [loading,setLoading]=useState(false)

console.log("this is instructor",instructor);
const instructorId=instructor._id
console.log(instructorId);

  useEffect(() => {
    setLoading(true)
    myCourses(instructorId)
      .then((res) => {
        setLoading(false)
        setCourses(res?.data?.courses);
      })
      .catch((error) => {
        console.log(error.message);
        if (error.response?.status) {
          navigate("/instructor/login");
          toast.error(error.response?.data?.message);
        }
      });
  }, []);

    return (
      <>
      {loading ? (
        <>loading</>
      ) : (
        <div className="container p-3 mt-12 mb-10">
          <b>Your Top Rated Courses</b>
          <div className="course-list flex flex-wrap space-x-4 p-4 mb-5">
            {course.map((data) => (
              <InstructorCourseCard key={data._id} value={data} />
            ))}
          </div>
          <div className="container p-3 mt-8">
            <b>Latest Uploaded</b>
            <div className="course-list flex flex-wrap space-x-4 p-4 mb-10">
              {course.map((data) => (
                <InstructorCourseCard key={data._id} value={data} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
       
    );
  };
  export default InstructorCourse;