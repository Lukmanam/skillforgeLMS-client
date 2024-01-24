import React, { useEffect } from "react";
import { Rating, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { rateCourse } from "../../../api/studentApi";
import { alreadyRated } from "../../../api/studentApi";

const RatingComponent = ({ courseId }) => {
  const [rated, setRated] = useState(5);
  const [ratingCompleted, SetRatingCompleted] = useState(false);

  const { student } = useSelector((state) => state.studentReducer);
  const studentId = student?._id;

  useEffect(() => {
    alreadyRated(courseId, studentId).then((res) => {
      SetRatingCompleted(res?.data?.ratingStatus);
      console.log(res?.data?.ratedOrNot?.rating);
      setRated(res?.data?.ratedOrNot?.rating);
    });
  }, []);

  const handleSubmitRating = () => {
    rateCourse(rated, courseId, studentId)
      .then((res) => {
        SetRatingCompleted(true);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {ratingCompleted ? (
        <div className="flex items-center gap-2 font-bold" style={{ color: "gold" }}>
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
        <Typography style={{ color: "white" }} className="font-medium"></Typography>
      </div>
      
      ) : (
        <div
          className="flex items-center gap-2 font-bold"
          style={{ color: "gold" }}
        >
          {rated}
          <Rating value={rated} onChange={(value) => setRated(value)} />

          <button
            className="bg-teal-50 text-gray-900 btn btn-outline w-auto"
            onClick={handleSubmitRating}
          >
            Rate Now
          </button>
          <Typography
            style={{ color: "white" }}
            className="font-medium"
          ></Typography>
        </div>
      )}
    </>
  );
};

export default RatingComponent;

// import React from "react";
// import { Rating, Typography } from "@material-tailwind/react";

// export function RatingWithText() {
//   const [rated, setRated] = React.useState(4);

//   return (
//     <div className="flex items-center gap-2 font-bold text-blue-gray-500">
//       {rated}.7
//       <Rating value={4} onChange={(value) => setRated(value)} />
//       <Typography color="blue-gray" className="font-medium text-blue-gray-500">
//         Based on 134 Reviews
//       </Typography>
//     </div>
//   );
// }

// export default
