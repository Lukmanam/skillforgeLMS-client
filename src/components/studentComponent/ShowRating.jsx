import React, { useState } from 'react'
import { Rating, Typography } from "@material-tailwind/react";
import { fetchCourseRating } from '../../../api/studentApi';





const ShowRating = ({courseId}) => {
    const [rated,setRated]=useState(null);
    const [ratingsCount,setRatingsCount]=useState(null)


    fetchCourseRating(courseId).then((res)=>{
        setRated(res?.data?.averageRating);
        setRatingsCount(res?.data?.ratingCount)

    })
  return (
    <div>
      {/* <div className="flex items-center gap-2 font-bold"
        style={{ color: "gold" }}
      >
        {rated}
        <Rating value={rated}/>
        based on {ratingsCount} Reviews
        <Typography
        color="blue-gray"
        className="font-medium"
      ></Typography>
    </div> */}
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
        <Typography style={{ color: "white" }} className="font-medium">Based on {ratingsCount} Ratings</Typography>
    </div>
  )
}

export default ShowRating
