import React, { useEffect } from "react";
import { Rating, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { rateCourse } from "../../../api/studentApi";
import { alreadyRated } from "../../../api/studentApi";

const RatingComponent = ({ courseId }) => {
  const [rated, setRated] = useState(0);
  const [ratingCompleted, SetRatingCompleted] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [review,setReview]=useState("");

  const { student } = useSelector((state) => state.studentReducer);
  const studentId = student?._id;

  useEffect(() => {
    alreadyRated(courseId, studentId).then((res) => {
      SetRatingCompleted(res?.data?.ratingStatus);
      console.log(res?.data?.ratedOrNot?.rating);
      setRated(res?.data?.ratedOrNot?.rating);
    });
  }, []);
  const openModal = (courseId) => {
    setActiveModal(courseId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleSubmitRating = () => {
    console.log(review,rated,"review and rated");
    rateCourse(rated,review, courseId, studentId)
      .then((res) => {
        SetRatingCompleted(true);
        console.log(res);
        closeModal()
         
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {ratingCompleted ? (
        <div
          className="flex items-center gap-2 font-bold"
          style={{ color: "gold" }}
        >
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
          <Typography
            style={{ color: "white" }}
            className="font-medium"
          ></Typography>
        </div>
      ) : (
        <div>
          <button
            className="bg-teal-50 text-gray-900 btn btn-outline w-auto"
            // onClick={handleSubmitRating}
            onClick={() => openModal(courseId)}
          >
            Rate Now
          </button>
        </div>
      )}

      <div
        id={`popup-modal-${courseId}`}
        tabIndex={-1}
        className={`fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full ${
          activeModal === courseId ? "" : "hidden"
        }`}
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover-bg-gray-600 dark:hover-text-white"
              data-modal-hide={`popup-modal-${courseId}`}
              onClick={() => closeModal()}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              {/* <svg
                                    className="mx-auto mb-4 text-green-500 w-12 h-12"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg> */}
              <div className="justify-center items-center ">
                <div
                  className="flex justify-center items-center gap-2 font-bold"
                  style={{ color: "gold" }}
                >
                  {rated}
                  <Rating value={rated} onChange={(value) => setRated(value)} />

                  <Typography
                    style={{ color: "white" }}
                    className="font-medium"
                  ></Typography>
                </div>
                <div className=" m-5">
                  <textarea className="rounded-lg p-2 w-full" onChange={(e)=>setReview(e.target.value)}></textarea>
                </div>
              </div>

              {/* <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                    Are you sure? Enrolling for Free{" "}
                                    {courseId}?
                                  </h3> */}

              <button
                data-modal-hide={`popup-modal-${courseId}`}
                type="button"
                onClick={() => {
                  console.log(courseId);
                  handleSubmitRating(courseId);
                }}
                className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Yes, I'm sure
              </button>
              <button
                data-modal-hide={`popup-modal-${courseId}`}
                type="button"
                onClick={() => closeModal()}
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover-text-white dark:hover-bg-gray-600 dark:focus:ring-gray-600"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
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
