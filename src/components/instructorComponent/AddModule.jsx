import React, { useEffect } from 'react'
import { useState } from 'react'
import { useFormik } from 'formik'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import {AddModuleapi} from "../../../api/instructorApi";


const initialValues={
    module_title:"",
    module_order:"",
    video_url:null

}
const AddModule=({course,setModules})=> {

    const [creating,setCreating]=useState(false);
    const [video,setVideo]=useState(null);
    const [videoError,setVideoError]=useState(null);
    const navigate=useNavigate()


    async function onSubmit(values)
    {
        setCreating(true);

        const formData = {
            module_title: values.module_title,
            module_order: values.module_order,
            video_url: video,
            course: course._id,
          };
        console.log(formData,"hello adding new Module");
        const res=await AddModuleapi({formData});
        if(res.status===200)
        {
            console.log("Success");
            navigate("/instructor/courseManagement");
            toast.success(res?.data?.message)
        }


    }

    const handleVideoChange=(event)=>{
        console.log("performing change of video file");
        const file = event.target.files[0];
        const isValid = file.type.toLowerCase().startsWith("video/");
        if(isValid)
        {
            console.log("okay,video");
            setVideoToBase(file)
            setVideoError(null)
        }
        else{
            setVideoError("Invalid File format, please Choose Video Only");
            toast.error(videoError);
            setVideo(null);
            event.target.value=null
        }

    };

    const setVideoToBase=async(file)=>{
      console.log("Changing to base Format",file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setVideo(reader.result)
      }
    }


    const {values,handleBlur,handleChange,handleSubmit}=useFormik({
        initialValues:initialValues,
        onSubmit
    })


  return (
    <>
      <button
        onClick={() => document.getElementById("module_modal").showModal()}
        type="button"
        className="btn btn-sm btn-outline"
      >
        + Add New Module
      </button>

      <dialog id="module_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
            //   onClick={() => resetForm()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="module_title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Module Title
                </label>
                <input
                  type="text"
                  name="module_title"
                  id="module_title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.module_title}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type Module title"
                  required
                />
                {/* {formik.touched.module_title && formik.errors.module_title && (
                  <div className="text-red-700 text-sm">
                    {errors.module_title}
                  </div>
                )} */}
              </div>

              <div>
                <label
                  htmlFor="module_order"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Module Order
                </label>
                <input
                  type="number"
                  name="module_order"
                  id="module_order"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.module_order}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter module order"
                  required
                />
                {/* {formik.touched.module_order && formik.errors.module_order && (
                  <div className="text-red-700 text-sm">
                    {formik.errors.module_order}
                  </div>
                )} */}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="video_url"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Upload module video
                </label>
                <input
                  type="file"
                  id="video_url"
                  name="video_url"
                  accept=".mp4"
                  onChange={handleVideoChange}
                  
                  className="border border-gray-500 rounded-md font-medium text-gray-400"
                />
                {/* {formik.touched.video_url && formik.errors.video_url && (
                  <div className="text-red-700 text-sm">
                    {formik.errors.video_url}
                  </div>
                )} */}
              </div>
            </div>

            <div className="container">
              {creating ? (
                <button
                  disabled
                  type="submit"
                  className="btn btn-sm btn-outline"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  + Create
                </button>
              ) : (
                <button type="submit" className="btn btn-sm btn-outline">
                  + Create
                </button>
              )}
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default AddModule
