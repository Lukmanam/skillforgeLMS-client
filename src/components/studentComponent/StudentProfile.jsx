import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import StudentNavbar from "./StudentNavbar";
import { useDispatch, useSelector } from "react-redux";
import { editStudentProfile } from "../../../api/studentApi";
import { studentLogin } from "../../reduxStore/slices/studentslice";
import EditProfileValidation from "../../validations/student/EditProfileValidation";
import { toast } from "react-toastify";

const studentProfile = () => {
  const [isedit, setEdit] = useState(false);
  const { student } = useSelector((state) => state.studentReducer);
  const studentId = student._id;
  const dispatch = useDispatch();

  const initialValues = {
    name: student?.name,
    email: student?.email,
    phone: student?.phone,
  };
  const { values, handleSubmit, handleChange, handleBlur,errors } = useFormik({
    initialValues: initialValues,
    validationSchema:EditProfileValidation,
    onSubmit,
    enableReinitialize: true,
  });

  async function onSubmit(values) {
    const res = await editStudentProfile(studentId, values);

    if (res.status === 200) {
      setEdit(false);
      const { updatedprofile } = res.data;
      dispatch(
        studentLogin({
          student: updatedprofile,
        })
      );
      toast.success(res?.data?.message);
    }
  }
  return (
    <>
      <StudentNavbar />
      <div className="min-h-screen flex items-center bg-slate-100">
        <div className="w-full max-w-md mx-auto  bg-slate-300 rounded-lg  p-6 shadow-lg ">
          <div className="mb-6  text-center">
            <img
              src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=100"
              className="mx-auto rounded-badge object-cover"
              alt="profile"
            />
          </div>
          {isedit ? (
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
                  value={values?.name}
                  placeholder="Enter your name"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              {errors.name && <small>{errors.name}</small>}

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
                  value={values?.phone}
                  placeholder="Enter your phone number"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              {errors.phone && <small>{errors.phone}</small>}
              
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.email}
                  placeholder="Enter your email"
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
          ) : (
            <div className="space-y-4">
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
                  value={values?.name}
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
                  disabled
                  id="email"
                  value={values?.email}
                  placeholder="Enter your email"
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
                  disabled
                  id="phone"
                  value={values?.phone}
                  placeholder="Enter your phone number"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                onClick={() => setEdit(true)}
                className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default studentProfile;
