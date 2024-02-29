import React from "react";
import { useState, useEffect } from "react";
import StudentNavbar from "../../components/studentComponent/StudentNavbar";
import { allCourselist } from "../../../api/studentApi";
import CourseCard from "../../components/studentComponent/CourseCard";
import { listCategories } from "../../../api/studentApi";
import { searchCourses } from "../../../api/studentApi";
import { filterbyCategory } from "../../../api/studentApi";


const AllCourse = () => {
  const [courses, setCourses] = useState(null);
  const [categories, setCategories] = useState(null);
  const [searchQuery,setSearchQuery]=useState("");
  const [filterCategory,setfilterCategory]=useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    allCourselist()
      .then((res) => {
        setLoading(false);
        setCourses(res?.data?.courses);
      })
      .catch((error) => {
        console.log(error);
      });

    listCategories()
      .then((res) => {
        setCategories(res?.data?.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(()=>{
    if(searchQuery.trim() !== "")
    {

      searchCourses(searchQuery).then((res)=>{
        const results=res.data.search;
        setCourses(results)
            }).catch((error)=>{
              console.log(error);
            })
    }
   
  },[searchQuery])

  useEffect(()=>{
    console.log(filterCategory,"this is the category for filtering");
    
    filterbyCategory(filterCategory).then((res)=>{
      const filtered=res.data.filtered;
      setCourses(filtered)
    }).catch((error)=>{
      console.log(error);
    })
  },[filterCategory])

  console.log(courses, "these are courses");
  console.log(categories, "categories in full Course Page");

  return (
    <>
      <StudentNavbar />
      <div className="w-auto h-44  bg-cyan-900 text-slate-100">
        <p className="flex items-center p-14 text-3xl text-slate-300 shadow-lg  font-sans">
          Take your career to the next level with SkillForGe
        </p>
      </div>
      <div className="flex flex-col lg:flex-row">
        {/* Left-sided category filter */}
        <div className="lg:w-72 bg-slate-200  p-5">
          {loading?(
            <>
             <div className="mb-4 h-16 bg-gray-300 rounded-md"></div>
                <div className="mb-4 h-14 bg-gray-300 rounded-md"></div>
                <div className="mb-4 h-16 bg-gray-300 rounded-md"></div>
                <div className="mb-4 h-16 bg-gray-300 rounded-md"></div>
                <div className="mb-4 h-16 bg-gray-300 rounded-md"></div>
                <div className="mb-4 h-16 bg-gray-300 rounded-md"></div>

            </>
          ):(

          <ul class="list">
            <li>
              {" "}
             
            </li>
            <ul>
              {
                categories && categories.length > 0 ? (
                  categories.map((data) => (
                    <button className=" btn btn-rounded w-full  bg-slate-400 text-slate-900 p-3 " onClick={
                      ()=>setfilterCategory(data._id)
                     
                      }>
                      <a>{data.name}</a>
                    </button>
                  ))
                ) : (
                  <li>Category Not Available</li>
                )

                // Loading state or something else while categories are being fetched
              }
            </ul>
          </ul>
          )}
          {/* Your category filter content goes here */}
        </div>

        {/* Listing all courses in the rest of the space */}
        <div className="lg:w-5/6 bg-slate-200 h-full p-4 shadow-2xl shadow-slate-300 ">
       
          <div className="flex items-center justify-center">
  <div className="flex w-full" > {/* Use flex container */}
    <input
      type="search"
      id="search"
      name="search"
      value={searchQuery}
      placeholder="Search Courses"
      onChange={(e)=>setSearchQuery(e.target.value)}
      className="input input-bordered w-full md:w-36 lg:w-full"
    />
    <button
      type="button"
      className="btn bg-slate-200 ml-2 w-20"
      disabled
    >
      Search
    </button>
  </div>
</div>
{loading?( <>
        <div className="animate-pulse">
          {/* Skeleton Loader */}
          
          <div className="container mx-auto my-8 bg-slate-200 rounded-md p-4">
            <div className="flex flex-wrap items-center">
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
            <div className="course-card bg-gray-500 rounded-lg outline-slate-500 shadow-lg overflow-hidden m-2 h-auto w-full lg:w-68"><div  className="w-full h-64"></div></div>
            <div className="course-card bg-gray-500 rounded-lg outline-slate-500 shadow-lg overflow-hidden m-2 h-auto w-full lg:w-68"><div  className="w-full h-64"></div></div>
            
            

              {/* Right Part - Course Details Skeleton */}
              <div className="w-full md:1/2 lg:w-1/3 p-4">
                {/* Skeleton for course details */}
               
                
              </div>
            </div>
          </div>
        </div>
      </>):(

          <div className="course-list flex space-x-4 p-5  ">
            <div className="course-list   flex flex-wrap  mx-auto mb-6">
              {courses && courses.length > 0 ? (
                courses.map((data) => (
                  <CourseCard key={data._id} value={data} />
                ))
              ) : (
                <div className="course-list flex flex-wrap space-x-4 p-4 mb-5">
                  Courses not Available
                </div>
              )}
            </div>
          </div>

      )}

        </div>
      </div>
    </>
  );
};

export default AllCourse;
