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

const instructorId=instructor._id

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
        <div className="w-screen h-full p-3  bg-white ">
         {/* <h1 className="mt-5 text-lg"> Your Top Rated Courses</h1> */}
          <div className="course-list flex flex-wrap  mx-auto items-center justify-center">
            {course.map((data) => (
              <InstructorCourseCard key={data._id} value={data} />
            ))}
          </div>
       
            {/* <b>Latest Uploaded</b>
            <div className="course-list flex flex-wrap justify-center mx-auto  mb-5 ">
              {course.map((data) => (
                <InstructorCourseCard key={data._id} value={data} />
              ))}
            </div> */}
          </div>
     
      )}
    </>
       
    );
  };
  export default InstructorCourse;