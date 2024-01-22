import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { addtoFavCourses } from "../../../api/studentApi";
import { favouriteStatus } from "../../../api/studentApi";
import { Link } from "react-router-dom";

const CourseCardEnrolled = ({ value }) => {
  const [favourite, setFavourite] = useState(false);
  const { student } = useSelector((state) => state.studentReducer);

  useEffect(() => {
    const studentId = student?._id;
    const courseId = value?._id;
    console.log(studentId, "student Id in useEffect");
    console.log(courseId, "course Id in useEffect");
    
  });

  return (
    
    <div className=" bg-white rounded-lg outline-double outline-slate-500 shadow-lg overflow-hidden m-2  h-auto w-60">
            <Link to={`/CourseDetails/${value._id}`} >

      <img
        src={value?.courseId?.thumbnail}
        alt="Course"
        className="w-full h-auto object-fit"
      />
      <div className="p-2">
        <h2 className="text-sm font-semibold mb-2">{value?.courseId?.courseName}</h2>
        <div className="flex ">
          <img
            className="w-5 h-5"
            src="https://thumbs.dreamstime.com/b/teacher-icon-vector-male-person-profile-avatar-book-teaching-school-college-university-education-glyph-113754458.jpg"
            alt="Bordered avatar"
          />
          <p className="text-xs text-gray-500 mt-4">
            <b> {value.courseId.instructorId.name}</b>
          </p>
        </div>
      </div>
      </Link>
      <div className="absolute bottom-4 right-4 flex items-center">
        <div className="flex items-center mr-2">
          {/* ... */}

          {/* .. */}
        </div>
        {/* {favourite === true ? (
          <button
            className="ml-auto"
            onClick={() => addremoveFavourite(value._id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : (
          <button
            className="ml-auto"
            onClick={() => addremoveFavourite(value._id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )} */}
      </div>
    </div>
  );
};

export default CourseCardEnrolled;
