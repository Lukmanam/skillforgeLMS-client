import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import StudentNavbar from "../../components/studentComponent/StudentNavbar";
import { courseLearn } from "../../../api/studentApi";
import { saveCourseProgression } from "../../../api/studentApi";
import { alreadyCompletedModules } from "../../../api/studentApi";

const LearningPage = () => {
  const { courseId } = useParams();
  const { student } = useSelector((state) => state.studentReducer);
  const studentId = student._id;
  const [course, setCourse] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [completedModules, setCompletedModules] = useState([]);
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)
    courseLearn(courseId)
      .then((res) => {

        console.log(res?.data.course, "this is response data course");
        setCourse(res?.data?.course);

       
        setLoading(false)

        console.log(course,"setted COURSE");
        if (res?.data?.course?.modules && res?.data?.course?.modules?.length > 0) {
          console.log(res?.data?.course?.modules[0].module, "this is cousre");
          setSelectedModule(res?.data?.course?.modules[0]?.module);
          

        }
        // setSelectedModule(course?.modules[0]?.module?.video_url);
      })
      .catch((error) => {
        setLoading(false)

        console.log(error);
      });
  }, []);

  console.log(course);

  useEffect(() => {
    alreadyCompletedModules(courseId, studentId)
      .then((res) => {
        console.log(res.data.modulesCompleted, "completed Modules response");
        const modulesCompleted = res?.data?.modulesCompleted;
        console.log(modulesCompleted, "this is module completed");
        console.log(
          modulesCompleted.Progress,
          "haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
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

  // Function to check if a module is completed
  const isModuleCompleted = (moduleId) => {
    return completedModules.includes(moduleId);
  };

  // console.log(selectedModule, "this is selected MOdule");
  // console.log(course, "cpurse Saved In Array");

  return (
    <>
    {loading?("loading"):(  <div>
        <StudentNavbar />
        <div className="w-full h-16 e bg-cyan-700">
          <p className="text-2xl text-slate-200 p-3">{course?.courseName}</p>
        </div>
        <div className="flex flex-col md:flex-row h-auto md:h-screen  bg-slate-100">
          <div className="md:w-2/3 h-3/4 rounded-sm m-1 ">
          <ReactPlayer
             url={selectedModule?.video_url}
             width="100%"
             height="100%"
             playing={true}
             controls={true}
             onEnded={handleVideoEnd}
           />

            <div className="md:w-2/3">
              <p className="text-slate-900 m-5">{course?.courseDescription}</p>
            </div>
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
                      {module.module.module_order}. {module.module.module_title}
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
      </div>)}
    
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
