import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import StudentNavbar from "../../components/studentComponent/StudentNavbar";
import { courseLearn } from "../../../api/studentApi";
import { saveCourseProgression } from "../../../api/studentApi";
import { alreadyCompletedModules } from "../../../api/studentApi";
import Chat from "../../components/studentComponent/Chat";
import { tab } from "@material-tailwind/react";

const LearningPage = () => {
  const { courseId } = useParams();
  const { student } = useSelector((state) => state.studentReducer);
  const studentId = student._id;
  const [course, setCourse] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [completedModules, setCompletedModules] = useState([]);
  const [activeTab,setActiveTab]=useState('tab1')
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    courseLearn(courseId)
      .then((res) => {
        console.log(res?.data.course, "this is response data course");
        setCourse(res?.data?.course);

        setLoading(false);

        console.log(course, "setted COURSE");
        if (
          res?.data?.course?.modules &&
          res?.data?.course?.modules?.length > 0
        ) {
          console.log(res?.data?.course?.modules[0].module, "this is cousre");
          setSelectedModule(res?.data?.course?.modules[0]?.module);
        }
        // setSelectedModule(course?.modules[0]?.module?.video_url);
      })
      .catch((error) => {
        setLoading(false);

        console.log(error);
      });
  }, []);

  console.log(course,"this is the course");

  useEffect(() => {
    alreadyCompletedModules(courseId, studentId)
      .then((res) => {
        console.log(res.data.modulesCompleted, "completed Modules response");
        const modulesCompleted = res?.data?.modulesCompleted;
        console.log(modulesCompleted, "this is module completed");
        console.log(
          modulesCompleted.Progress,
          
        );
        setCompletedModules(modulesCompleted.Progress);
        console.log(modulesCompleted);
        console.log(completedModules, "all Completed Modu");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleModuleClick = (module) => {
    console.log(module, "this is module in  handling");
    console.log("handling module click");
    setSelectedModule(module);
  };

  const handleVideoEnd = (moduleId) => {
    console.log(moduleId);
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, selectedModule._id]);
      saveCourseProgression(courseId, studentId, selectedModule._id);
    }
  };
  const handleTabClick=(tab)=>{
    setActiveTab(tab)
  }

  // Function to check if a module is completed
  const isModuleCompleted = (moduleId) => {
    return completedModules.includes(moduleId);
  };

  // console.log(selectedModule, "this is selected MOdule");
  // console.log(course, "cpurse Saved In Array");

  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div>
          <StudentNavbar />
          <div className="w-full h-16 e bg-cyan-700">
            <p className="text-2xl text-slate-200 p-3">{course?.courseName}</p>
          </div>
          <div className="flex flex-col md:flex-row h-auto md:h-full  bg-slate-200">
            <div className="md:w-2/3 h-3/4 rounded-sm m-1 ">
              <ReactPlayer
                url={selectedModule?.video_url}
                width="100%"
                height="100%"
                playing={false}
                controls={true}
                onEnded={handleVideoEnd}
              />
              {/* 
            <div className="md:w-4/4 bg-orange-600">
              <p className="text-slate-900 m-2">{course?.courseDescription}</p>
            </div> */}
            </div>
            <div className="md:w-1/3 h-3/4 bg-slate-200 m-1">
              {/* <div className="w-6/7 m-2 rounded-lg outline outline-1 bg-white h-16"></div> */}
              {course?.modules.map((module, index) => (
                <div
                  key={module.module._id}
                  className="container p-3 flex items-center justify-between hover:border hover:border-gray-900 rounded-md"
                >
                  <div
                    className="flex items-center"
                    onClick={() => handleModuleClick(module.module)}
                  >
                    <span className="mr-4">
                      {/* Display video thumbnail image */}
                      <img
                        src={course?.thumbnail}
                        alt="Video Thumbnail"
                        className="w-auto h-14 object-cover rounded-md"
                      />
                    </span>
                    <h3 className="text-lg font-medium text-gray-900">
                      <span>
                        {module.module.module_order}.{" "}
                        {module.module.module_title}
                      </span>
                    </h3>
                  </div>
                  {isModuleCompleted(module.module._id) && (
                    <span className="rounded-full bg-green-400 text-white font-bold p-1">
                      &#10004;
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className=" bg-slate-200">
          <div className="flex">
        <div
          className={`cursor-pointer p-4 ${activeTab === 'tab1' ? 'bg-cyan-800 text-white' : 'bg-gray-500 text-white'} w-1/2`}
          onClick={() => handleTabClick('tab1')}
        >
          <div className="w-full font-bold  text-center">Course Description</div>
          
        </div>
        <div
          className={` flex cursor-pointer p-4 ${activeTab === 'tab2' ? 'bg-cyan-800 text-white' : 'bg-gray-500' } w-1/2`}
          onClick={() => handleTabClick('tab2')}
        >
           <div className=" flex justify-center items-center  w-full ">
              {/* <div className="w-full outline bg-teal-400 rounded  flex items-center "> */}
                
                <div className="mr-2 pl-5 items-center">
                  <svg
                    fill="white"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path d="M5 8a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z" />
                    <path d="M2.165 15.803l.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 008 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 01-.524 2.318l-.003.011a10.722 10.722 0 01-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 00.693-.125zm.8-3.108a1 1 0 00-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 01-2.088-.272 1 1 0 00-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 00.398-2z" />
                  </svg>
                </div>
                <h1 className=" font-bold text-white ">
                  Instructor Chat
                </h1>
              {/* </div> */}
            </div>
        </div>
      </div>
        {activeTab==='tab2' ?  <Chat instructorId={course?.instructorId?._id} /> : <div className="sm:w-3/4 md:w-full max-h-3/4 min-h-screen overflow-auto  bg-slate-50 p-10">{course?.courseDescription}</div>
        }   
           
          </div>
        </div>
      )}
    </>
  );
};

export default LearningPage;

// import React, { useEffect, useState } from "react";
// import ReactPlayer from "react-player";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import StudentNavbar from "../../components/studentComponent/StudentNavbar";
// import { courseLearn } from "../../../api/studentApi";

// const LearningPage = () => {
//   const { courseId } = useParams();
//   const { student } = useSelector((state) => state.studentReducer);
//   const [course, setCourse] = useState(null);
//   const [selectedModule, setSelectedModule] = useState(null);

//   useEffect(() => {
//     courseLearn(courseId)
//       .then((res) => {
//         console.log(res);
//         setCourse(res?.data.course);
//         // Initialize selectedModule with the first module's video URL
//         setSelectedModule(res?.data.course.modules[0]?.module?.video_url);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [courseId]);

//   const handleModuleClick = (module) => {
//     setSelectedModule(module.module.video_url);
//   };

//   console.log(course, "course Saved In Array");

//   return (
//     <>
//       <div>
//         <StudentNavbar />
//         <div className="w-full h-16 e bg-cyan-700">
//           <p className="text-2xl text-slate-200 p-3">{course?.courseName}</p>
//         </div>
//         <div className="flex flex-col md:flex-row h-auto md:h-screen  bg-slate-100">
//           <div className="md:w-2/3 h-3/4 rounded-sm m-1 ">
//             <ReactPlayer
//               url={selectedModule}
//               width="100%"
//               height="100%"
//               loop={true}
//               playing={false}
//               controls={true}
//             />

//             <div className="md:w-2/3">
//               <p className="text-slate-900 m-5">{course?.courseDescription}</p>
//             </div>
//             <div className="md:hidden lg:block fixed bottom-4 right-4">
//               {/* Button for small screens */}
//               <button className="btn bg-orange-400 text-white p-2 rounded-full">
//                 Next Module
//               </button>
//             </div>
//           </div>
//           <div className="md:w-1/3 h-3/4 bg-slate-200 m-1">
//             {course?.modules.map((module, index) => (
//               <div
//                 key={module.module._id}
//                 className="container p-3 flex items-center justify-between hover:border hover:border-gray-900 rounded-md"
//                 onClick={() => handleModuleClick(module.module)}
//               >
//                 <div className="flex items-center">
//                   <span className="mr-4">
//                     {/* Display video thumbnail image */}
//                     <img
//                       src={course?.thumbnail}
//                       alt="Video Thumbnail"
//                       className="w-auto h-14 object-cover rounded-md"
//                     />
//                   </span>
//                   <h3 className="text-lg font-medium text-gray-900">
//                     <span>
//                       {module.module.module_order}. {module.module.module_title}
//                     </span>
//                   </h3>
//                 </div>
//               </div>
//             ))}

//             <div className="md:block lg:hidden fixed bottom-4 right-4">
//               {/* Button for medium screens */}
//               <button className="btn bg-orange-400 text-white p-2 rounded-full">
//                 Next Module
//               </button>
//             </div>
//           </div>
//           <div className="hidden lg:block fixed bottom-4 right-4">
//             {/* Button for large screens */}
//             <button className="btn bg-orange-400 text-white p-2 rounded-full">
//               Next Module
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LearningPage;
