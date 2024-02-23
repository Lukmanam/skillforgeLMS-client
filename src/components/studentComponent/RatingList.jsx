import React, { useEffect } from 'react'
import { useState } from 'react';
import { fetchcoursereviews } from '../../../api/studentApi';
import { Rating, Typography } from "@material-tailwind/react";
const RatingList = ({courseId}) => {
    
    console.log(courseId,"in rating List");
    const [rated,setRated]=useState([]);
    const [ratingsCount,setRatingsCount]=useState(null)
    const [reviews,setReviews]=useState([])

    useEffect(()=>{
        fetchcoursereviews(courseId).then((res)=>{
            setReviews(res?.data?.ratenReviews)
            setRatingsCount(res?.data?.ratingCount)
            })
    },[])
    console.log(reviews,"this is whooole reviews");
    console.log(ratingsCount,"this is the ratings count ");
  return (
    <>
    <div className='h-56 w-screen bg-slate-00'>
    <h2 className="text-xl mt-12 ml-2 font-bold mb-4">Reviews  MUHAMMED LUKMAN</h2>

    <div>
      {reviews.map((review)=>{
        <div>listing reviews and ratings</div>

        // <div className='ml-10'><p className=' font-bold'>{review.studentId}</p></div>

      })}
     {Array.from({ length: 5 }, (_, index) => (
         <span
         key={index}
         className={`text-2xl ${
             index < rated ? "text-yellow-500" : "text-gray-300"
            }`}
            >
            &#9733;
          </span>
        ))}
        {
        
        reviews.map((data)=>{
            <div className='w-9 h-20 bg-black'>{data?.studentId?.name}</div>
        
        })}
        <Typography style={{ color: "white" }} className="font-medium">Based on {ratingsCount} Ratings</Typography>
    </div>
    </div>
    </>
  )
}

export default RatingList
