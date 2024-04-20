import React, { useEffect, useState } from "react";
import { fetchEnrolledCourse } from "../../../api/studentApi";
import StudentNavbar from "./StudentNavbar";
import CourseCardEnrolled from "./CourseCardEnrolled";
import { useSelector } from "react-redux";

const EnrolledCourses = () => {
  const [enrolledCourses, setEnrolledCourse] = useState([]);
  const { student } = useSelector((state) => state.studentReducer);
  const studentId = student?._id;
  useEffect(() => {
    fetchEnrolledCourse(studentId)
      .then((res) => {
        setEnrolledCourse(res?.data?.enrolledCourses);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [studentId]); // Assuming studentId is the only dependency needed for this effect
  
  return (
    <>
      <StudentNavbar />
      <div className="lg:w-screen bg-slate-300 h-screen items-center justify-center  p-4">       
       <div className="course-list flex flex-wrap items-center p-4 mb-5">
          {enrolledCourses && enrolledCourses.length > 0 ? (
            enrolledCourses.map((data) => <CourseCardEnrolled key={data._id} value={data} />)
          ) : (
            <div className=" flex w-screen items-center justify-center mt-12">
              <div className="justify-center items-center  w-screen">
                <div className="text-center">
                  <img
                    src="https://www.dozentlms.com/wp-content/uploads/2020/11/hero-image.png"
                    alt="Wishlist Icon"
                    className="w-48 h-auto mx-auto mb-4"
                  />
                  <p className="text-xl font-semibold">
                    Courses Not Enrolled! Enroll Now
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EnrolledCourses;
