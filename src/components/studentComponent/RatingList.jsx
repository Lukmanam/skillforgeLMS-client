import React, { useEffect } from "react";
import { useState } from "react";
import { fetchcoursereviews } from "../../../api/studentApi";
import { Rating, Typography } from "@material-tailwind/react";
const RatingList = ({ courseId }) => {
  console.log(courseId, "in rating List");
  const [rated, setRated] = useState([]);
  const [ratingsCount, setRatingsCount] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchcoursereviews(courseId).then((res) => {
      setReviews(res?.data?.ratenReviews);
      setRatingsCount(res?.data?.ratingCount);
    });
  }, []);
  console.log(reviews, "this is whooole reviews");
  console.log(ratingsCount, "this is the ratings count ");
  return (
    <>
      <div className="h-56 w-screen bg-slate-00">
        <h2 className="text-xl  ml-2 font-bold mb-4">Reviews</h2>
{
  reviews.length>0?(
    reviews.map((review) => {
      return (
        <div className="mt-6">
          <div className="flex">
            {review?.rating >= 3 ? (
              <div className="ml-6 bg-green-600 rounded-md text-white px-1">
                {" "}
                &#9733; {review?.rating}
              </div>
            ) : (
              <div className="ml-6 bg-yellow-600 rounded-md text-white px-1">
                {" "}
                &#9733; {review?.rating}
              </div>
            )}

            <div className="ml-2">
              <p className=" font-semibold">{review?.studentId?.name}</p>
            </div>
          </div>
          <div className="ml-6 py-2">
            <p className="font-normal"> {review?.review}</p>
           </div>
        </div>
      );
    })
    
  ):(
    <div className="ml-6">No Reviews Yet</div>
  )
}
        
       
        <Typography style={{ color: "white" }} className="font-medium">
          Based on {ratingsCount} Ratings
        </Typography>
      </div>
    </>
  );
};

export default RatingList;
