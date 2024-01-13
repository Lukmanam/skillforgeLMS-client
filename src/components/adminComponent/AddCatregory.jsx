import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { addCategory } from "../../../api/adminApi";
import { Navigate, useNavigate } from "react-router-dom";

const AddCatregory=()=> {
    
    const navigate=useNavigate();

  const initialValue = {
    categoryName: "",
  };
  
  async function onSubmit(values){
    const res=await addCategory(values);
    console.log(res);
    try {
        
        if(res.status==200)
        {
            navigate("/admin/categoryList");
            toast.success(res?.data?.message);
        }
        else if(res.status===400)
        {
            console.log(res.status);
            toast.error(res?.data?.message)
        }
        
    } catch (error) {
        
        console.log(error);
    }

    
    
  }

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} className="p-4 md:p-5 pt-4">
      <label
        htmlFor="categoryName"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
      >
        Category
      </label>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400  dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-5"
        name="categoryName"
        id="category"
        placeholder="Enter category Name"
        value={values.categoryName}
        onBlur={handleBlur}
        onChange={handleChange}
        
      />
      <div className="flex justify-center">
      <button
        type="submit"
        className="text-white inline-flex items-center justify-center bg-teal-600 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-600 dark:focus:bg-teal-600"
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
        Add Category
      </button>
      </div>
    </form>
  );
}

export default AddCatregory;
