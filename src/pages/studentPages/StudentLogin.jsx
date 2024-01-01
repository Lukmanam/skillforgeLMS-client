import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { studentLoginValidation } from "../../validations/student/studentLoginValidation";
import { studentLoginVerify } from "../../../api/studentApi";
import { useDispatch } from "react-redux";
import { studentLogin } from "../../reduxStore/slices/studentslice";
import OAuth from "../../components/studentComponent/OAuth";
import "react-toastify/dist/ReactToastify.css";

const StudentLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function onSubmit(values) {
    try {
      console.log(values);
      const res = await studentLoginVerify(values);
      if (res.status === 200) {
        const {token,studentData}=res.data
        localStorage.setItem("studentToken",token);
        dispatch(
          studentLogin({
            token:token,
            student:studentData
          })
        );
        console.log(token);
        toast(res?.data?.message)
        navigate("/home");
      }
      else if(res.status===401){
        toast(res?.data?.message)
      }
      if(res.status===500)
      {
        toast(res?.data?.message)
      }
     

    } catch (error) {
      
      console.log(error);
      toast(error?.response?.data?.message)

    }
  }

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: studentLoginValidation,
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
        <div className="bg-white p-8 rounded shadow-md w-96  ">
          <h1 className="text-2xl font-bold mb-4 mt-8 text-center">Student Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="username"
                className="block text-gray-700 font-semibold text-left"
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
            <div className="mb-1">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold text-left "
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={values.password}
                placeholder="Enter your Password"
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-gray-300  rounded-full px-4 py-2 w-full mt- focus:outline-none focus:border-blue-500"
                style={{ borderColor: "#49BBBD" }}
              />
              {errors.password && <small>{errors.password}</small>}
              <p className="mt-1 mr-0 ml-0 text-left"><Link to={"/stforgotPassword"}><b> Forgot Password</b> </Link> </p>
            </div>
            <button
              type="submit"
              className="text-white rounded-full px-4 py-2 mt-3 w-full font-semibold hover:bg-blue-600  mb-2"
              style={{ backgroundColor: "#49BBBD" }}
            >
              Login
            </button>
            <OAuth/>
            <p>
              Don't have an account..?
              <Link to="/signup">
                <b>Create One</b>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;

