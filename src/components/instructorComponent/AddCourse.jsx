import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { addCourseValidation } from "../../validations/instructor/addCourseValidation";
import { addCourseapi } from "../../../api/instructorApi";
import { fetchcategories } from "../../../api/instructorApi";
import { toast } from "react-toastify";


const initialValues = {
  courseName: "",
  courseDescription: "",
  category: "",
  price: 0,
};

const AddCourse = () => {
  const [categories,setCategories]=useState(null)
  const [thumbnailImageError,setThumbnailImageError]=useState(null);
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const { instructor } = useSelector((state) => state.instructorReducer);
  const navigate=useNavigate()


  async function onSubmit(values) {
    const res = await addCourseapi({...values, thumbnailImage, instructor });
    if(res.status===200){
   
      navigate("/instructor/home");
      toast.success(res?.data?.message)

    }

  }
  
 useEffect(()=>{
  fetchcategories().then((res)=>{
    setCategories(res?.data?.categories) 
  }).catch((error)=>{
    console.log(error);
  })
},[])

  const handleThumbnailChange = (event) => {
    const file = event.target.files[0]
    const isValid = file.type.toLowerCase().startsWith("image/jpeg") || file.type.toLowerCase().startsWith("image/png");
    if (isValid) {
      setThumbnailImageToBase(file);
      setThumbnailImageError(null);
    } else {
      setThumbnailImageError("Invalid file type. Please select valid image files.");
      toast.error(thumbnailImageError)
      setThumbnailImage(null);
      event.target.value = null;
    }
  };

  const setThumbnailImageToBase = async (files) => {
      const reader = new FileReader();
      reader.readAsDataURL(files);
      reader.onloadend = () => {
        setThumbnailImage( reader.result);
      };
    
  };


  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} className="p-4 md:p-5">
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <label
            htmlFor="courseName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            Course Name
          </label>
          <input
            type="text"
            name="courseName"
            id="courseName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Type course Name here"
            value={values.courseName}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.courseName && <small>{errors.courseName}</small>}
        </div>

        <div className="col-span-2 sm:col-span-1">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            value={values.price}
            onBlur={handleBlur}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-500 dark:text-gray-800 dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Enter course Price"
            required=""
          />
          {/* {errors.price && <small>{errors.price}</small>} */}
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={values.category}
            onBlur={handleBlur}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            
            <option>Select category</option>
            {categories && categories.length>0?(
              categories.map((data)=>
              
                 <option key={data._id} value={data._id}>{data.name}</option>
                )
            ):(
              <option value="" disabled>No categories Available</option>
            )}
          </select>
        
        </div>
        <div className="col-span-2">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900  dark:text-gray-900"
          >
            Course Description
          </label>
          <textarea
            id="courseDescription"
            name="courseDescription"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write course Description here"
            value={values.courseDescription}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {/* {errors.courseDescription && <small>{errors.courseDescription}</small>} */}
        </div>
      </div>
      <div className="col-span-2">
        <>
          <label
            className="block mb-2 text-sm font-medium text-gray-900  dark:text-gray-900"
            htmlFor="file_input"
          >
            Upload Thumbnail
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 p-1 mb-2"
            id="thumbnail"
            name="thumbnail"
            value={values.thumbnail}
            onChange={handleThumbnailChange}
            type="file"
            accept="image/*"
          />
          {/* {errors.thumbnail && <small>{errors.thumbnail}</small>} */}
        </>
      </div>
      <button
        type="submit"
        className="text-white inline-flex items-center bg-teal-600 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-600 dark:focus:bg-teal-600"
      >
        <svg
          className="me-1 -ms-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
        Add Course
      </button>
    </form>
  );
};

export default AddCourse;
