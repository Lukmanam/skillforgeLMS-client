import React, { useState } from "react";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { instructorLoginValidation } from "../../validations/instructor/instructorLoginValidation";
import { InstructorLoginVerify } from "../../../api/instructorApi";
import { useDispatch } from "react-redux";
import { instructorLogin } from "../../reduxStore/slices/instructorSlice";
import OAuthins from "../../components/instructorComponent/OAuthins";
import "react-toastify/dist/ReactToastify.css";

const InstructorLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function onSubmit(values) {
    try {
      console.log(values);
      const res = await InstructorLoginVerify(values);
      if (res.status === 200) {
        const { token, instructor } = res.data;
        console.log(res.data,"jhbvb");
        localStorage.setItem("instructorToken", token);
        dispatch(
          instructorLogin({
            token: token,
            instructor: instructor ,
          })
        );
        console.log("token in frondend for instructor", token);
        toast(res?.data?.message);
        navigate("/instructor/home");
      } else if (res.status === 401) {
        toast(res?.data?.message);
      }
      if (res.status === 500) {
        toast(res?.data?.message);
      }
    } catch (error) {
      console.log(error);
      toast(error?.response?.data?.message);
    }
  }

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: instructorLoginValidation,
    onSubmit,
  });

  return (
    <div className="mb-16">
      <div className="logo w-60 ml-11 mb-5">
        <img src="../assets/skillforge.svg" alt="logo" />
      </div>
      <div className="  flex items-center  flex-col md:flex-row justify-center  ">
        <div className="image">
          <img
            src="../assets/loginimage/instructorLogin.jpg"
            style={{ width: "700px" }}
          />
        </div>
        <div className="bg-white p-8 rounded shadow-md w-96  ">
          <h1 className="text-2xl font-bold text-center mt-4">Instructor Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-gray-700 font-semibold mb-2 text-left mt-5"
              >
                Username:
              </label>
              <input
                type="text"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your User name"
                className="border border-gray-300 rounded-full px-5 py-2 w-full focus:outline-none focus:border-blue-500 "
                style={{ borderColor: "#49BBBD" }}
              />
         {errors.email && <small>{errors.email}</small>}

            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2 text-left "
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={values.password}
                placeholder="Enetr your Password"
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-gray-300 rounded-full px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                style={{ borderColor: "#49BBBD" }}
              />
      {errors.password && <small>{errors.password}</small>}
      <p className="mt- mr-0 ml-0 text-left"><Link to={"/instructor/forgotPassword"}><b> Forgot Password</b> </Link> </p>

            </div>
            <button
              type="Submit"
              className="text-white rounded-full px-4 py-2  w-full font-semibold hover:bg-blue-600  mb-2"
              style={{ backgroundColor: "#49BBBD" }}
            >
              Login
            </button>
            
           <OAuthins/>
            <p>
              Don't have an account?
              <Link to={"/instructor/signup"}>
                <b>Click here</b>
              </Link>
            </p>
          </form>
          <Link to={"/login"}>
          <p className="hover:cursor-pointer mt-2">Login as <b>Student</b></p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorLogin;
