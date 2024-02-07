import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import {loadStripe} from '@stripe/stripe-js';
import { enrollToCourse } from "../../../api/studentApi";
import { fetchCourseData } from "../../../api/studentApi";
import StudentNavbar from "./StudentNavbar";
import { checkforEnrollment } from "../../../api/studentApi";
import { paymentApi } from "../../../api/studentApi";
import RatingComponent from "./RatingComponent";
import ShowRating from "./showRating";
import RatingList from "./RatingList";

const CourseDetals = () => {
  const [loading, setLoading] = useState(true);
  const [courseData, setCourseData] = useState({});
  const [enrolledCourse, setEnrolledCourse] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const { courseId } = useParams();
  console.log(courseId, "this is courseId");
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourseData(courseId)
      .then((res) => {
        setCourseData(res.data.courseData);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    if (studentId) {
      checkforEnrollment(studentId, courseId)
        .then((res) => {
          setEnrolledCourse(res?.data?.enrolled);
        })
        .catch((error) => console.log(error));
    }
  }, [enrolledCourse]);

  const { student } = useSelector((state) => state.studentReducer);
  const studentId = student?._id;

  const enrollCourse = async (courseId) => {
    try {
      if (studentId) {
        const res = await enrollToCourse(courseId, studentId);
        console.log(res);
        if (res.status === 200) {
          toast.success(res?.data?.message);
          setEnrolledCourse(!enrolledCourse);
          closeModal()
        } else if (res?.data?.status === 400) {
          toast(res?.data?.message);
        }
      } else {
        navigate("/login");
        toast("Please Login to continue");
      }
    } catch (error) {
      console.log(error);
    }
  };



  const makePayment=async()=>{
    
try {
  console.log("haaaaaaaaaai in payment");
  const stripe= await loadStripe("pk_test_51OFr1pSB3NLla9eMkflIN058py6nnlYYZaTplPo90zwVxeuGbKgykFCllNFwZ3sUPSJILtGufMQFnXDkFlzNMK6d00cnKRlbN6")
  console.log(stripe,"this is stripe");
  const res=await paymentApi(courseData[0],student);
  console.log(res,"this is response");
  const sessionId=await res.data.id
  const result=stripe.redirectToCheckout({
    sessionId:sessionId
  });

  if(result.error){
    console.log(error);
  }
} catch (error) {
  console.log(error);
  
}  
    }

  const openModal = (courseId) => {
    setActiveModal(courseId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  console.log(courseData, "module");
 
  return (
    <div>
      <>
        <StudentNavbar />
        <section className="bg-gray-900 p-2">
          {loading ? (
            <>
              <div className="animate-pulse">
                {/* Skeleton Loader */}
                <div className="container mx-auto my-8 bg-gray-800 rounded-md p-4">
                  <div className="flex flex-wrap items-center">
                    {/* Left Part - Video Player Skeleton */}
                    <div className="md:w-full lg:w-1/3 bg-gray-700 rounded-md p-4">
                      {/* Skeleton for video player */}
                      <div className="w-full h-64 bg-gray-600 rounded-md"></div>
                    </div>

                    {/* Right Part - Course Details Skeleton */}
                    <div className="w-full md:1/2 lg:w-2/3 p-4">
                      {/* Skeleton for course details */}
                      <div className="mb-3 h-8 bg-gray-600 rounded-md"></div>
                      <div className="mb-4 h-6 bg-gray-600 rounded-md"></div>

                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="w-full mb-2">
                          {/* Skeleton for level */}
                          <div className="flex flex-row items-center mb-1">
                            <div className="text-gray-400 rounded-md font-mono text-md font-thin h-4 w-24 bg-gray-600"></div>
                          </div>

                          {/* Skeleton for price */}
                          <div className="flex flex-row items-center mb-1">
                            <div className="text-gray-400 rounded-md font-mono text-md font-thin h-4 w-24 bg-gray-600"></div>
                          </div>

                          {/* Skeleton for instructor */}
                          <div className="flex flex-row items-center mb-1">
                            <div className="text-gray-400 rounded-md text-md font-mono font-thin h-4 w-24 bg-gray-600"></div>
                          </div>
                        </div>

                        <div className="w-full h-full flex items-end">
                          <div>
                            {/* Skeleton for enroll button */}
                            <div className="bg-gray-600 text-sm text-white text-center font-semibold p-3 rounded-md h-10 w-32"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="container mx-auto my-8 bg-gray-900">
                <div className="flex flex-wrap items-center">
                  {/* Left Part - Video Player */}
                  <div className="md:w-full lg:w-1/3">
                    <ReactPlayer
                      url={
                        courseData[0]?.modules[0]
                          ? courseData[0]?.modules[0]?.module?.video_url
                          : ""
                      }
                      width="100%"
                      height="100%"
                      loop={true}
                      playing={true}
                      controls={true}
                    />
                  </div>

                  {/* Right Part - Course Details */}
                  <div className="w-full md:1/2 lg:w-2/3 p-4">
                    <h2 className="mb-3 line-clamp-3 capitalize hover:line-clamp-none text-2xl font-extrabold tracking-wide leading-none text-white md:text-3xl lg:text-4xl dark:text-white">
                      {courseData[0]?.courseName}
                    </h2>

                    <p className="mb-4 text-lg font-normal capitalize text-gray-300 lg:text-xl dark:text-gray-400">
                      {courseData[0]?.courseDescription}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="w-full mb-2">
                        <div className="flex flex-row items-center mb-1">
                          {/* <p className="text-gray-400 font-mono text-md font-thin">
                          <i class="fas fa-signal mr-2 text-gray-200"></i>
                          {courseDetails.level}
                        </p> */}
                        </div>

                        <div className="flex flex-row items-center mb-1">
                          {courseData[0]?.price === 0 ? (
                            <p className="text-gray-400 font-mono text-md font-thin">
                              <i class="fas fa-rupee-sign mr-2 text-gray-200"></i>
                              FREE
                            </p>
                          ) : (
                            <p className="text-gray-400 font-mono text-md font-thin">
                              <i class="fas fa-rupee-sign mr-2 text-slate-200"></i>
                              ₹ {courseData[0]?.price}
                            </p>
                          )}
                        </div>

                        <div className="flex flex-row items-center mb-1">
                          <p className="text-gray-400 text-md font-mono font-thin">
                            <i class="fas fa-chalkboard-teacher mr-2 text-gray-200"></i>
                            {courseData[0].instructorId.name}{" "}
                          </p>
                        </div>
                      </div>
                      <div className="w-full h-full flex items-end">
                        <div>
                          {enrolledCourse ? (
                            <button className="bg-green-600 text-white p-3 rounded-md text-sm font-semibold">
                              <i className="fas fa-check-circle mr-2" />
                              Enrolled
                            </button>
                          ) : courseData[0]?.price === 0 ? (
                            <button
                              type="button"
                              onClick={() => openModal(courseData[0]._id)}
                              class="bg-teal-600 border border-gray-400 text-sm text-white text-center font-semibold p-3 rounded-md hover:bg-white hover:text-black"
                            >
                              <i class="fas fa-user-plus mr-2"></i>
                              Enroll Now For Free
                            </button>
                            
                          ) : (
                            <button
                              type="button"
                              onClick={() => {
                                makePayment()
                              }}
                              class="bg-teal-600 border border-gray-400 text-sm text-white text-center font-semibold p-3 rounded-md hover:bg-white hover:text-black"
                            >
                              <i class="fas fa-user-plus mr-2"></i>
                              Enroll Now
                            </button>
                          )}
                          <div
                            id={`popup-modal-${courseData[0]._id}`}
                            tabIndex={-1}
                            className={`fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full ${
                              activeModal === courseData[0]._id ? "" : "hidden"
                            }`}
                          >
                            <div className="relative w-full max-w-md max-h-full">
                              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <button
                                  type="button"
                                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover-bg-gray-600 dark:hover-text-white"
                                  data-modal-hide={`popup-modal-${courseData[0]._id}`}
                                  onClick={() => closeModal()}
                                >
                                  <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                  </svg>
                                  <span className="sr-only">Close modal</span>
                                </button>
                                <div className="p-6 text-center">
                                  <svg
                                    className="mx-auto mb-4 text-green-500 w-12 h-12"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>

                                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                    Are you sure? Enrolling for Free{" "}
                                    {courseData[0]?.courseName}?
                                  </h3>

                                  <button
                                    data-modal-hide={`popup-modal-${courseData[0]._id}`}
                                    type="button"
                                    onClick={() => {
                                      console.log(courseData[0]._id);
                                      enrollCourse(courseData[0]._id);
                                    }}
                                    className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                                  >
                                    Yes, I'm sure
                                  </button>
                                  <button
                                    data-modal-hide={`popup-modal-${courseData[0]._id}`}
                                    type="button"
                                    onClick={() => closeModal()}
                                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover-text-white dark:hover-bg-gray-600 dark:focus:ring-gray-600"
                                  >
                                    No, cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {enrolledCourse ? (
                                <div className="rating grid w-100 h-30 mt-5"> <RatingComponent courseId={courseData[0]._id}/></div>
                          ) :  (
                            <div className="rating grid w-100 h-30 mt-5"> <ShowRating courseId={courseData[0]._id}/></div>
                            
                          ) 
                          }

          

                  </div>
                </div>
              </div>
            </>
          )}
        </section>

        {/* Module Listing */}
        <div className="container mx-auto mt-4 mb-4">
          {/* Module listing content here */}
          <div className="container p-3 flex items-center justify-between">
            <h3 className="text-2xl text-gray-900 font-bold">
              Lessons in this course
            </h3>

            <h3 className="text-xl text-gray-900 font-semibold">
              {loading ? (
                ""
              ) : (
                <>
                  <span className="text-[19px]">
                    <i class="far fa-clock mr-2"></i>
                  </span>
                  {/* <span className="text-xl text-[18px] font-mono">
                  {courseDetails.duration}
                </span> */}
                </>
              )}
            </h3>
          </div>
          <hr />
          <div className="container mx-auto mt-4 mb-4">
            {loading ? (
              <div className="animate-pulse">
                {[1, 2, 3].map((placeholderModule) => (
                  <div
                    key={placeholderModule}
                    className="container p-3 flex items-center justify-between border border-gray-400 rounded-md mb-2"
                  >
                    <div className="flex items-center">
                      <span className="mr-4 bg-gray-400 rounded-full h-6 w-6"></span>
                      <div className="bg-gray-400 h-4 w-32 rounded-md"></div>
                    </div>
                    <div className="h-6 w-12 bg-gray-400 rounded-md"></div>
                  </div>
                ))}
              </div>
            ) : (
              courseData[0]?.modules.map((module, index) => (
                <div
                  key={module.module._id}
                  className="container p-3 flex items-center justify-between hover:border hover:border-gray-900 rounded-md"
                >
                  <div className="flex items-center">
                    <span className="mr-4"></span>
                    <h3 className="text-lg font-medium text-gray-900">
                      <span>
                        {module.module.module_order}.{" "}
                        {module.module.module_title}
                      </span>
                    </h3>
                  </div>

                  {/* <h3 className="text-md font-mono text-thin text-gray-900 font-semibold">
                  {module.duration}
                </h3> */}
                </div>
              ))
            )}
          </div>
          <hr />
        </div>

        <>
          {/* About the Course */}
          <div className="container mx-auto mt-4 mb-2">
            <div className="container mb-4 p-3">
              <h2 className="text-2xl font-bold mb-4">About the Course</h2>
              {loading ? (
                <div className="animate-pulse">
                  <div className="h-4 rounded-md bg-gray-400 w-3/4 mb-4"></div>
                  <div className="h-4 rounded-md bg-gray-400 w-2/4 mb-4"></div>
                  <div className="h-4 rounded-md bg-gray-400 w-1/4 mb-4"></div>
                </div>
              ) : (
                <p className="text-gray-700">
                  {courseData[0].courseDescription}
                </p>
              )}
            </div>
            <hr />
            {/* {courseData && courseData.length > 0 && (
            <RatingList courseId={courseData[0]._id} />
              )} */}
            {/* <RatingComponent courseId={courseData[0]._id}/> */}
            {/* <RatingList courseId={courseData[0]?._id}/> */}
            {/* review rating lists */}
          </div>
        </>
      </>
    </div>
  );
};

export default CourseDetals;
