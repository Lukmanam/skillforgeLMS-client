import React, { useEffect } from 'react'
import StudentNavbar from './StudentNavbar'
import CourseCard from './CourseCard';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import {fetchFavouriteCourses} from '../../../api/studentApi';
import FavCourseCard from './FavCourseCard';

const FavouriteCourses = () => {
const navigate = useNavigate();
  const [favCourses, setFavCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { student } = useSelector((state) => state.studentReducer);
  const studentId=student._id;

  useEffect(()=>{
    fetchFavouriteCourses(studentId).then((res)=>{
      setFavCourses(res?.data?.favCourses)
    })
  },[])



  return (
    <>
        <StudentNavbar/>
        {/* <div className="course-list flex space-x-4 p-4"> */}
        <div className="lg:w-full bg-slate-200 h-full p-4 shadow-2xl shadow-slate-300 ">
     
                 <div className="course-list flex flex-wrap p-4 mb-5">
                 {favCourses&&favCourses.length>0 ? (
                           favCourses.map((data)=>
                            <FavCourseCard key={data._id} value={data} />
                            
                            )
                            
                            
                         ) 
                           :(  <div className=" flex w-screen items-center justify-center">
                             <div className="justify-center items-center  w-screen">
                           <div className="text-center">
                             <img
                               src="https://www.dozentlms.com/wp-content/uploads/2020/11/hero-image.png"
                               alt="Wishlist Icon"
                               className="w-48 h-auto mx-auto mb-4"
                             />
                             <p className="text-xl font-semibold">Courses not Added in Wishlist</p>
                           </div>
                         </div>
                         </div>)
                                         }
             </div>
             </div>
       
          
      
    </>
  )
}

export default FavouriteCourses
