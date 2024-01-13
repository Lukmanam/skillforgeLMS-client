import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify'
import { fetchCourseData } from "../../../api/instructorApi";
import AddModule from "../../components/instructorComponent/AddModule";
import InstructorNavbar from "../../components/instructorComponent/InstructorNavbar";
import ModuleDelete from "../../components/instructorComponent/ModuleDelete";
import { changeListStatus } from "../../../api/instructorApi";
import PlayButton from "./PlayButton";
import { checklistStatus } from "../../../api/instructorApi";

const UpdateCourse = () => {
  console.log("trying to update course");
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modules, setModules] = useState([]);
  const [Listed, setis_Listed] = useState(false);
  const { id } = useParams();
  console.log(id, "this is course id in update page");

  const listUnlist = async (courseId) => {
    try {
      const res = await changeListStatus(courseId);
      if (res?.status === 200) {
        toast.success(res?.data?.message);
        setis_Listed(!Listed);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("hai to api");
    fetchCourseData(id)
      .then((res) => {
        console.log(res?.data, "this is response");
        setCourse(res?.data?.courseData);
        setModules(res?.data?.modules);
        setis_Listed(res?.data?.status);
      })
      .catch((error) => {
        console.log(error);
      });

    checklistStatus(id).then((res) => {
      if (res?.status === 200) {
        setis_Listed(res?.data?.status);
      }
    });
  }, [Listed,modules]);

  console.log(course, "THIS IS FETCHEDD course");
  console.log(modules);

  return (
    <>
      <InstructorNavbar />
      {/* Main Content Container */}
      <div className="mx-auto flex">
        {/* Sidebar for Dash Board */}

        {/* Scrollable Area for Course Listings */}
        <div className="h-screen w-full bg-gray-200 p-4 overflow-y-auto">
          {/* for mobile */}

          <div className="container bg-white p-4 rounded-md">
            <>
              {/* Module Listing */}
              <div className="container mx-auto ">
                <div className="relative container min-h-[150px] rounded-md mb-4">
                  <div className="absolute inset-0 bg-opacity-60 bg-black rounded-md" />
                  <div className="absolute left-0 top-0 bottom-0 p-4 text-white">
                    {/* Your text content here */}
                    {loading ? (
                      <p>loading</p>
                    ) : (
                      <h1 className="mb-1 line-clamp-1 hover:line-clamp-none text-2xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-white from-sky-500">
                          {course?.courseName}
                        </span>{" "}
                        {/* World. */}
                      </h1>
                    )}
                    {loading ? (
                      <p>loading...</p>
                    ) : (
                      <p className="text-md font-normal line-clamp-1 hover:line-clamp-none text-gray-200 lg:text-lg dark:text-gray-400">
                        { course?.courseDescription}
                      </p>
                    )}
                  </div>

                  <div
                    className="bg-cover min-h-[150px] rounded-md"
                    style={{
                      backgroundImage: `url('${course?.thumbnail}')`,
                      backgroundPosition: "center center",
                    }}
                  />
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="p-3 bg-blue-200 rounded  shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300">
                    <div className="text-blue-600 text-1xl mb-1">
                      <i className="fas fa-tag"></i>
                    </div>
                    <div className="text-lg font-bold text-blue-800">
                      Category
                    </div>
                    {loading ? (
                      <p>loading...</p>
                    ) : (
                      <div className="text-gray-600">
                        {course?.category?.name}
                      </div>
                    )}
                  </div>
                  <div className="p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300 bg-red-200 rounded shadow-lg">
                    <div className="text-red-600 text-1xl mb-1">
                      <i className="fas fa-dollar-sign"></i>
                    </div>
                    <div className="text-lg font-bold text-red-800">Price</div>
                    {loading ? (
                      <p>loading...</p>
                    ) : (
                      <div className="text-gray-600">{course?.price}</div>
                    )}
                  </div>
                  <div className="p-3 bg-yellow-200 rounded shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300">
                    <div className="text-yellow-600 text-1xl mb-1">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="text-lg font-bold text-yellow-800">
                      Status
                    </div>
                    {loading ? (
                      <p>loading...</p>
                    ) : (
                      <div className="text-gray-600 font-normal">
                        {course?.isApproved ? "Approved" : "Pending"}
                      </div>
                    )}
                  </div>
                  {course?.is_Listed ? (
                    <button
                      key={course?._id}
                      onClick={() => listUnlist(course?._id)}
                      className=" p-3 bg-red-700 rounded shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300"
                    >
                      <div className="text-red-600 text-1xl mb-1">
                        <i className="fas fa-check-circle"></i>
                      </div>

                      <div className="text-yellow-50 font-normal">
                        Available
                      </div>
                      <div className="text-lg font-bold text-yellow-50">
                        Unlist Course
                      </div>
                    </button>
                  ) : (
                    <button
                      key={course?._id}
                      onClick={() => listUnlist(course?._id)}
                      className=" p-3 bg-green-700 rounded shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300"
                    >
                      <div className="text-red-600 text-1xl mb-1">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div className="text-lg font-bold text-yellow-50">
                        List Course
                      </div>

                      <div className="text-yellow-50 font-normal">
                        Not Available
                      </div>
                    </button>
                  )}
                </div>

                {/* Module listing content here */}
                <div className="container p-3 flex items-center justify-between">
                  <h3 className="text-xl text-gray-900 font-bold">
                    Modules in this course
                  </h3>
                  <h3 className="text-xl text-gray-900 font-semibold">
                    <AddModule course={course} setModules={setModules} />
                  </h3>
                </div>
                <hr />
                <div className="container mx-auto mt-4 mb-4">
                  {loading ? (
                    <p>loading...</p>
                  ) : (
                    course?.modules?.map((module) => (
                      <div
                        key={module?._id}
                        className="container p-3 mb-1 hover:text-gray-800 bg-gray-100 flex items-center justify-between hover:bg-gray-200 rounded-md"
                      >
                        <h3 className="text-md font-medium text-gray-800">
                          {module?.module?.module_order}{" "}
                          {module?.module?.module_title}{" "}
                          <span className="text-sm ml-1 font-light"></span>
                        </h3>
                        <div className="flex">
                          <PlayButton module={module?.module} />

                        
                          
                        <ModuleDelete 
                          modules={course?.modules}
                          setModules={setModules}
                          module={module}
                          courseId={course?._id}
                        />

                        </div>
                      </div>
                    ))
                  )}
                </div>
                <hr />
              </div>
            </>

            <>
              {/* About the Course */}
              <div className="container mx-auto mt-4">
                <div className="container mb-4 p-3">
                  <h2 className="text-lg font-bold mb-4">About the Course</h2>
                  {loading ? (
                    <p>loading...</p>
                  ) : (
                    <p className="text-gray-700 font-normal">
                      {course?.courseDescription}
                    </p>
                  )}
                </div>
                <hr />
              </div>

              {/* Created at */}
              {/* <div className="container mx-auto mt-1">
              <div className="container mb-4 p-3">
                <h2 className="text-lg font-bold mb-4">
                  Created at:{" "}
                  {loading ? (
                    ""
                  ) : (
                    <span className="font-thin text-md">
                      {course.formatted_created_at}
                    </span>
                  )}
                </h2>
              </div>
            </div> */}
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateCourse;
