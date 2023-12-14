import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik, Formik, Form, Field } from "formik";
import studentSignupvalidation from "../../validations/signupValidation/StudentsignupValidation";
import { Link,useNavigate } from "react-router-dom";
import { studentSignup } from "../../../api/studentApi";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  cPassword: "",
};
let otpId;
async function onSubmit(values) {
  try {
    const res = await studentSignup(values);
    if (res?.status === 201) {
      const { student } = res.data;
      toast(res.data.message);
    }

    console.log("user signed up");
  } catch (error) {
    toast.error(error.response?.data?.message);
  }
}
const StudentSignup = () => {
  // const navigate
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: studentSignupvalidation,
    onSubmit,
  });
  return (
    <div className="mb-16">
      <div className="logo w-60 ml-11 mb-5">
        <img src="./assets/skillforge.svg" alt="logo" />
      </div>
      <div className=" flex items-center  flex-col md:flex-row justify-center  ">
        <div className="image">
          <img
            src="./assets/loginimage/studentlogin.jpg"
            style={{ width: "700px" }}
          />
        </div>
        <div className="bg-white pl-10 pr-10 rounded shadow-lg w-96">
          <h1 className="text-2xl font-bold ">Student Signup</h1>

          <div className="mb-3">
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2 text-left mt-5"
              >
                Name :
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name  "
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                className="border border-gray-300 rounded-full px-5 py-2 w-full focus:outline-none focus:border-blue-500 "
                style={{ borderColor: "#49BBBD" }}
              />
              <br />
              {errors.name && <small>{errors.name}</small>}

              <br />
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2 text-left"
              >
                Email :
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                className="border border-gray-300 rounded-full px-5 py-2 w-full focus:outline-none focus:border-blue-500 "
                style={{ borderColor: "#49BBBD" }}
              />
              <br />
              {errors.email && <small>{errors.email}</small>}
              <br />
              <label
                htmlFor="phone" 
                className="block text-gray-700 font-semibold mb-2 text-left "
              >
                Phone :
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Enter your Phone number"
                value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
                className="border border-gray-300 rounded-full px-5 py-2 w-full focus:outline-none focus:border-blue-500 "
                style={{ borderColor: "#49BBBD" }}
              />
              <br />
              {errors.phone && <small>{errors.phone}</small>}
              <br />
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2 text-left"
              >
                New Password :
              </label>
              <input
                type="password"
                name="password"
                placeholder="create a strong password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                className="border border-gray-300 rounded-full px-5 py-2 w-full focus:outline-none focus:border-blue-500 "
                style={{ borderColor: "#49BBBD" }}
              />
              <br />
              {errors.password && <small>{errors.password}</small>}
              <br />
              <label
                htmlFor="cPassword"
                className="block text-gray-700 font-semibold mb-2 text-left "
              >
                Confirm new Password :
              </label>
              <input
                type="password"
                name="cPassword"
                placeholder="re-enter password"
                value={values.cPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                className="border border-gray-300 rounded-full px-5 py-2 w-full focus:outline-none focus:border-blue-500 "
                style={{ borderColor: "#49BBBD" }}
              />
              <br />
              {errors.cPassword && <small>{errors.cPassword}</small>}
              <br />
              <button
                type="submit"
                className="text-white rounded-full px-4 py-2 w-full font-semibold hover:bg-blue-600 mt-3 mb-6 "
                style={{ backgroundColor: "#49BBBD" }}
              >
                Signup
              </button>
              <p>
                Already have an Account.? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSignup;
