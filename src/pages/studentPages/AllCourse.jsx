import React from 'react'
import { useState,useEffect } from 'react';
import StudentNavbar from '../../components/studentComponent/StudentNavbar'
import { allCourselist } from '../../../api/studentApi';
import CourseCard from '../../components/studentComponent/CourseCard';
import { listCategories } from '../../../api/studentApi';






const AllCourse = () => {
    const [courses,setCourses]=useState(null);
    const [categories,setCategories]=useState(null);
    const [loading,setLoading]=useState(false)


    useEffect(()=>{
      setLoading(true)
      allCourselist()
      .then((res)=>{
        setLoading(false)
        setCourses(res?.data?.courses)
      }).catch((error)=>{
        console.log(error);
      })

      listCategories().then((res)=>{
        setCategories(res?.data?.categories)
  }).catch((error)=>{
    console.log(error);
      })
    },[])

    console.log(courses,"these are courses");
    console.log(categories,"categories in full Course Page");

  return (
    <>
<StudentNavbar/>
<div className='w-auto h-44  bg-cyan-900 text-slate-100'>
<p className='flex items-center p-14 text-3xl text-slate-300 shadow-lg  font-sans'>Take your career to the next level with SkillForGe
</p>

</div>
<div className="flex flex-col lg:flex-row">
      {/* Left-sided category filter */}
      <div className="lg:w-1/5 bg-slate-200  p-4">
      <ul class="list">
        <li> <div className=' btn w-full rounded-lg bg-black text-white p-4 '> All Courses</div></li>
        <ul className="">
                {categories &&
                  categories.length > 0 ? (
                    categories.map((data)=>
                  <li  className=' btn btn-rounded w-full  bg-slate-400 text-slate-900 p-3 ' ><a>{data.name}</a></li>)
                  ) 
                    :(<li>Category Not Available</li>)
                  
                 
                  // Loading state or something else while categories are being fetched
                }
                </ul>
       
        </ul>
        {/* Your category filter content goes here */}
        
      </div>

      {/* Listing all courses in the rest of the space */}
      <div className="lg:w-4/5 bg-slate-300 h-full  p-4">
      <div className="course-list flex space-x-4 p-5  ">
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
    </div>
    </>
  )
}

export default AllCourse
