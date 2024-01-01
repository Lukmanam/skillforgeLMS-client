import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import {toast} from "react-toastify";
import {studentLogout} from "../../reduxStore/slices/studentslice"

const StudentNavbar = () => {
  const [isDropdownOpen,setDropdownOpen]=useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const toggleDropdown=()=>{
    setDropdownOpen(!isDropdownOpen)
  }
  const{student}=useSelector((state)=>state.studentReducer);
  const handleLogout=async()=>{
    console.log("Logging out Student");
    localStorage.removeItem("studentToken");
    dispatch(studentLogout());
    toast("LoggedOut Successfully ")
    navigate("/login")
  };

    return (
   

      <div className="navbar bg-base-100 w-full flex items-center justify-between px-4">
        <div className="flex items-center mr-13">
        <img src="./assets/skillforge.svg"  className="h-12 mr-4 pr-12" alt="logo" />
      
        </div>
  
        {/* Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ml-10">
            <li ><a className="ml-12 pl-10 "><b>Home</b></a></li>
            <li>
              <details className="ml-12 ">
                <summary><a className="pl-5 pr-5"><b>Learn</b></a></summary>
                <ul className="">
                  <li ><a>Technology</a></li>
                  <li><a>Science </a></li>
                </ul>
              </details>
            </li>
            <li  className="ml-12  pl-1"><a><b>MyCourses</b></a></li>
          </ul>
        </div>
  
        <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        {student ? (
          <>
          <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={handleLogout}><b>Logout</b></a></li>
          </>
        ):(
          <li>< Link to="/login" >Login</Link></li>
        )}
      </ul>
    </div>
  </div>
        
      </div>
    );
  };
  
  export default StudentNavbar;
  