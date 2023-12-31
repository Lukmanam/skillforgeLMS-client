import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { instructorLogout } from "../../reduxStore/slices/instructorSlice";
import AddNewCourse from "./AddNewCourse";
import AddCourse from "./AddCourse"
import Modal from 'react-modal'
// import { Modal } from "flowbite";
const InstructorNavbar = () => {
  const [modalIsOpen, setModalIsOPen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   const toggleDropdown=()=>{
  //     setDropdownOpen(!isDropdownOpen)
  //   }
  const openModal=()=>{
    setModalIsOPen(true)
  }

  const closeModal=()=>{
    setModalIsOPen(false);
  }


  const { instructor } = useSelector((state) => state.instructorReducer);

  console.log(instructor, "fsdgvgsczz");

  const handleLogout = async () => {
    console.log("Logging out Instructor");
    localStorage.removeItem("instructorToken");
    dispatch(instructorLogout());
    toast("LoggedOut Successfully ");
    navigate("/instructor/login");
  };

  return (
    <div className="navbar bg-base-100 w-full flex items-center justify-between">
      <div className="flex items-center mr-13">
        <img
          src="/src/assets/skillforge.svg"
          className="h-12 mr-4 pr-12"
          alt="logo"
        />
      </div>

      {/* Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ml-10">
          <li>
            <a className="ml-12 pl-10 ">
              <b>Home</b>
            </a>
          </li>
          <li>
            <details className="ml-12 ">
              <summary>
                <a className="pl-5 pr-5">
                  <b>Students</b>
                </a>
              </summary>
              <ul className="">
                <li>
                  <a>Chats</a>
                </li>
                <li>
                  <a>Appointment Requests</a>
                </li>
              </ul>
            </details>
          </li>
          <li className="ml-12  pl-1">
            <a>
              <b>My Courses</b>
            </a>
          </li>
          <li className="ml-12  pl-1">
            <button onClick={openModal} className="bg-teal-600" >
              <b>+ Add New Course</b>
            </button>
            {/* <Modal 
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Add New Course">
             <button className="items-center bg-teal-600 rounded-full text-slate-100  p-2" onClick={closeModal}>Close Modal</button>
              <AddNewCourse/>
            </Modal> */}
            
          </li>
        </ul>
      </div>

      <div className="flex-none gap-2">
        {/* <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div> */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            {instructor.instructor === null ? (
              <li>
                <Link to="/instructor/login">Login</Link>
              </li>
            ) : (
              <>
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogout}>
                    <b>Logout</b>
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InstructorNavbar;
