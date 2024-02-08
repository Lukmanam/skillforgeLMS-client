import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { adminLoginValidation } from "../../validations/admin/adminLoginValidation";
import { useDispatch } from "react-redux";
import AdminDashboard from "./AdminDashboard";
import { adminLoginVerify } from "../../../api/adminApi";
import { adminLogin } from "../../reduxStore/slices/adminSlice";



const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("Hai admin Login page");
  async function onSubmit(values) {
    try { 
      const res = await adminLoginVerify(values);
      if (res.status === 200) {
        const { token, userName } = res.data;
        localStorage.setItem("adminToken", token);
        dispatch(
          adminLogin({
            token: token,
            admin: userName,
          })
        );
        
        toast(res?.data?.message);
        navigate("/admin/dashboard");
      }
      if(res.status===401)
      {
        toast(res?.data?.message)
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error.message);
    }
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: adminLoginValidation,
      onSubmit,
    });

  return (
    <div className=" bg-gray-100 h-screen">
      <div className="logo w-60 ml-11 ">
        <img src="./assets/skillforge.svg" alt="logo" />
      </div>
      <div className="flex items-center justify-center  ">
        <div className="bg-slate-200 p-10 mt-4 rounded-3xl shadow-gray-500 shadow-2xl w-96  ">
          <h1 className="text-2xl font-bold text-center mb-4 mt-8">Admin Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="username"
                className="block text-gray-700 font-semibold mb-2 text-left mt-12"
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
              <br/>
            {errors.email && <small>{errors.email}</small>}
              <br/>
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
                placeholder="Enter your Password"
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-gray-300 mb-4 rounded-full px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                style={{ borderColor: "#49BBBD" }}
              />
              <br/>
            {errors.password && <small>{errors.password}</small>}
              <br/>
            </div>
            <button
              type="submit"
              className="text-white rounded-full px-4 py-2 w-full font-semibold hover:bg-blue-600 mt-5 mb-4"
              style={{ backgroundColor: "#49BBBD" }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin
