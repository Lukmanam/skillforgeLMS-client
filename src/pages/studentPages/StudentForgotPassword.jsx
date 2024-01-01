import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import { recoverPasswordValidation } from "../../validations/student/recoverPassword";
import { studentforgotpassword } from "../../../api/studentApi";
import { toast } from "react-toastify";
let otpId;
const StudentForgotPassword = () => {
  const navigate = useNavigate();


  async function onSubmit(values) {
    try {
      console.log(values);
      const res = await studentforgotpassword(values);
      if (res.status === 201) {
          const {studentData}=res.data;
          toast.success(res?.data?.message);
      }
      
      
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: recoverPasswordValidation,
    onSubmit,
  });

  return (
    <div className="mb-16">
      <div className="logo w-60 ml-11 mb-5">
        <img src="./assets/skillforge.svg" alt="logo" />
      </div>
      <div className="flex items-center  flex-col md:flex-row justify-center  ">
        <div className="image">
          <img
            src="./assets/loginimage/studentlogin.jpg"
            style={{ width: "700px" }}
          />
        </div>
        <div className="bg-white p-8 rounded shadow-md w-96 pt-12 mt-1 ">
          <h1 className="text-2xl font-bold mb-4 mt-12">Recover Password</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="username"
                className="block text-gray-700 font-semibold mb-2 text-left mt-12"
              >
                Email id
              </label>
              <input
                type="text"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your Email id"
                className="border border-gray-300 rounded-full px-5 py-2 w-full focus:outline-none focus:border-blue-500 "
                style={{ borderColor: "#49BBBD" }}
              />
              {errors.email && <small>{errors.email}</small>}
            </div>
            <p className="mt-12">Click on Verify in email</p>

            <button
              type="submit"
              className="text-white rounded-full px-4 py-2 w-full font-semibold hover:bg-blue-600 mt-5 mb-4"
              style={{ backgroundColor: "#49BBBD" }}
            >
              Verify Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentForgotPassword;
