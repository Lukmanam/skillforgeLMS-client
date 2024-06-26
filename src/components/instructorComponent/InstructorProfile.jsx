import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import InstructorNavbar from "./InstructorNavbar";
import { editProfileData } from "../../../api/instructorApi";
import { toast } from "react-toastify";
import { instructorLogin } from "../../reduxStore/slices/instructorSlice";
import EditProfileValidation from "../../validations/student/EditProfileValidation";
const InstructorProfile = () => {
  const [profile, setProfile] = useState(null);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const { instructor } = useSelector((state) => state.instructorReducer);
  const instructorId = instructor._id;
  const initialValues = {
    name: instructor?.name,
    email: instructor?.email,
    phone: instructor?.phone,
  };

  async function onSubmit(values) {
    try {
     
      const res = await editProfileData(values, instructorId);
      if (res.status == 200) {
     
        setEdit(false);
        const { updatedInstructor } = res.data;
        dispatch(
          instructorLogin({
            instructor: updatedInstructor,
          })
        );

      }
    } catch (error) {
      console.log(error);
    }
  }

  const { values, handleSubmit, handleChange, handleBlur,errors} = useFormik({
    initialValues: initialValues,
    validationSchema:EditProfileValidation,
    onSubmit,
    enableReinitialize: true,
  });

  return (
    <>
      <InstructorNavbar />
      <div className="min-h-screen flex items-center bg-slate-100">
        <div className="w-full max-w-sm mx-auto   rounded-badge  p-5 shadow-slate-400 shadow-2xl  ">
          <div className="mb-6  text-center">
            <img
              src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=100"
              className="mx-auto rounded-badge object-cover"
              alt="profile"
            />
          </div>
          {edit ? (
            <>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Enter your name"
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                {/* {errors.name && <small>{errors.name}</small>} */}
                <div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your phone number"
                      value={values.phone}
                      className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    />
                      {errors.phone && <small>{errors.phone}</small>}
                  </div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                disabled
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your email"
                    value={values.email}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
                >
                  Save Changes
                </button>
              </form>
            </>
          ) : (
            <>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    disabled
                    id="name"
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Enter your name"
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    disabled
                    onBlur={handleBlur}
                    placeholder="Enter your email"
                    value={values.email}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    disabled
                    onBlur={handleBlur}
                    placeholder="Enter your phone number"
                    value={values.phone}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  onClick={() => 
                    {
                     
                      setEdit(true)}
                    }
                  className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
                >
                  Edit
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default InstructorProfile;
