import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { myCourses } from '../../../api/instructorApi'
import { Link, Navigate } from 'react-router-dom'
import Modal from "react-modal";
import EditCourse from './EditCourse'






const CourseManagement = () => {
    const [course,setCourses]=useState([])
    const [activeModal,setActiveModal]=useState(null)
    const [selectedCourseId, setSelectedCourseId] = useState(null);
    const [loading,setLoading]=useState(false)
    const [modalIsOpen, setModalIsOPen] = useState(false);
    const { instructor } = useSelector((state) => state.instructorReducer);
    const instructorId=instructor._id

    useEffect(()=>{
        myCourses(instructorId).then
        ((res)=>{
            setCourses(res?.data?.courses)
        }).catch((error)=>{
            console.log(error.message);
        })
    },[])



    
const openModal = () => {
  setModalIsOPen(true);
};

const closeModal = () => {
  setModalIsOPen(false);
};

  return (
    <>
  
    <div className="w-full p-5 flex justify-center items-center ">          
    <div className=" dark:border-gray-700">
        <div className=" relative  shadow-xl sm:rounded-xl bg-slate-100">
         
          <h1 className="text-3xl pt-2 text-center"><b>Course</b></h1>
        
          <table className="text-sm text-left text-gray-500 dark:text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Course Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Approval Status
                </th>
                <th scope="col" className="px-6 py-3">
                  detail
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {course.length > 0 ? (
                course.map((data) => (
                  <tr
                    key={data._id}
                    className=" border-b dark:bg-gray-50 dark:border-gray-200 hover: bg-slate-200 dark:hover:bg-gray-100"
                  >
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 whitespace-nowrap dark:text-black"
                    >
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          {data.courseName}
                        </div>
                        <div className="font-normal text-gray-500">
                          {/* {data.category} */}
                          
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{data.category.name}</td>
                    <td className="px-6 py-4"> ₹ {data.price} </td>
                    <td className="px-6 py-4">
                    {data.isApproved ? (
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />{" "}
                          Approved
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-700 mr-2" />{" "}
                          Pending Approval
                        </div>
                      )}
                      
                    </td>
                    <td className="px-6 py-4">
                   
                        <Link to={`/instructor/updateCourse/${data._id}`}>
                        <button
                          className="focus:outline-none w-24 text-white bg-teal-600 hover-bg-red-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-teal-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                          type="button"
                         
                        >
                          View
                        </button> 
                        </Link>
                         </td>

                         <td className="px-6 py-4">
                         <button onClick={()=>{setSelectedCourseId(data._id);
                          openModal()}}type='button'  className="focus:outline-none w-24 text-white bg-teal-600 hover-bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-teal-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              <b>Edit</b>
            </button>
            <Modal 
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Add New Course Modal"
              className="w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto bg-slate-200 mt-10 rounded-box"
            >
              {/*  */}
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                  {/* <span className="sr-only">Close modal</span> */}
                </button>
              </div>
              <h3 className="text-lg font-semibold text-center pt-5 text-gray-900 dark:text-black">
                Edit
              </h3>

              <EditCourse courseId={selectedCourseId} />
            </Modal>
                         </td>


                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-4 text-center text-gray-900 dark:text-white"
                  >
                    No Courses Uploaded
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      </div>
 
   
  
  </>
  )
}

export default CourseManagement
