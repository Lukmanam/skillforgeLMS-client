import React from "react";
import { useFormik } from "formik";
import { instructorSignup } from "../../../api/instructorApi";
import intructorSignupValidation from "../../validations/instructor/instructorsignupValidation";
import { Link, useNavigate } from "react-router-dom";
import {toast } from 'react-toastify'
import OAuthins from "../../components/instructorComponent/OAuthins";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  cPassword: "",
};

let otpId;

const InstructorSignup = () => {
  const navigate=useNavigate()
  async function onSubmit(values){
    try {
      const res=await instructorSignup(values);
      if(res?.status===201)
      {
        console.log("instructor Signed Up");
        const {instructor,otpId}=res.data;
        toast(res.data.message)
        navigate('/instructor/insotp',{state:{instructorEmail:instructor.email,otpId:otpId,instructorId:instructor._id},})
        console.log("navigation");
      }
    } catch (error) {
  
      console.log("error is out");
     toast.error(error?.response?.data?.message)
    }
  }
  
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: intructorSignupValidation,
    onSubmit,
  });

  return (
    <>
    <div className="logo w-60 ml-11 mb-5 flex items-start ">
        <img src="../assets/skillforge.svg" alt="logo" />
      </div>
    <div className="flex flex-col  justify-center items-center">
      
      <div className="flex flex-col md:flex-row items-center">
        <div className="image">
          <img
            src="../assets/loginimage/instructorLogin.jpg"
            style={{ width: "100%", maxWidth: "700px", height: "auto" }}
            alt="Login Image"
          />
        </div>
        <div className="bg-white pl-10 pr-10 rounded shadow-lg w-full  md:w-96 md:ml-5">
          <h1 className="text-2xl font-bold text-center md:text-left">
            Instructor Signup
          </h1>
          <div className="mb-3">
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold  text-left mt-5"
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                className="border border-gray-300 rounded-full px-5 py-2 w-full focus:outline-none focus:border-blue-500"
                style={{ borderColor: "#49BBBD" }}
              />
              {errors.name && <small>{errors.name}</small>}

              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold  text-left mt-2 "
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                className="border border-gray-300 rounded-full px-5 py-2 w-full focus:outline-none focus:border-blue-500"
                style={{ borderColor: "#49BBBD" }}
              />
              {errors.email && <small>{errors.email}</small>}

              <label
                htmlFor="phone"
                className="block text-gray-700 font-semibold  text-left mt-2 "
              >
                Phone:
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Enter your Phone number"
                value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
                className="border border-gray-300 rounded-full px-5 py-2 w-full focus:outline-none focus:border-blue-500"
                style={{ borderColor: "#49BBBD" }}
              />
              {errors.phone && <small>{errors.phone}</small>}

              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold  text-left mt-2"
              >
                New Password:
              </label>
              <input
                type="password"
                name="password"
                placeholder="Create a strong password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                className="border border-gray-300 rounded-full px-5 py-2 w-full focus:outline-none focus:border-blue-500"
                style={{ borderColor: "#49BBBD" }}
              />
              {errors.password && <small>{errors.password}</small>}

              <label
                htmlFor="cPassword"
                className="block text-gray-700 font-semibold  text-left mt-2"
              >
                Confirm new Password:
              </label>
              <input
                type="password"
                name="cPassword"
                placeholder="Re-enter password"
                value={values.cPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                className="border border-gray-300 rounded-full px-5 py-2 w-full focus:outline-none focus:border-blue-500"
                style={{ borderColor: "#49BBBD" }}
              />
              {errors.cPassword && <small>{errors.cPassword}</small>}

              <button
                type="submit"
                className="text-white rounded-full px-4 py-2 w-full font-semibold hover:bg-blue-600 mt-3 mb-2"
                style={{ backgroundColor: "#49BBBD" }}
              >
                Signup
              </button>
              <OAuthins/>
            </form>
            <p>Already have an Account ?! <Link to='/instructor/login'><b>Login</b></Link> </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default InstructorSignup;
