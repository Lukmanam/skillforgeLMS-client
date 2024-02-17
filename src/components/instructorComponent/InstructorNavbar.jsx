import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { instructorLogout } from "../../reduxStore/slices/instructorSlice";
import AddCourse from "./AddCourse";
import Modal from "react-modal";
// import { Modal } from "flowbite";
const InstructorNavbar = () => {
  const [modalIsOpen, setModalIsOPen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const toggleDropdown=()=>{
      setDropdownOpen(!isDropdownOpen)
    }
  const openModal = () => {
    setModalIsOPen(true);
  };

  const closeModal = () => {
    setModalIsOPen(false);
  };

  const { instructor } = useSelector((state) => state.instructorReducer);
  const handleLogout = async () => {
    console.log("Logging out Instructor");
    localStorage.removeItem("instructorToken");
    dispatch(instructorLogout());
    toast("LoggedOut Successfully ");
    navigate("/instructor/login");
  };

  return (
    <div className="navbar bg-base-100 w-screen flex  mx-auto  justify-between ">
      <div className="hidden md:flex items-center mr-13"> {/* Hide on mobile or tablet */}
      <div className="flex-1">
        <a className="btn btn-ghost text-4xl"><b>SkillForGe</b></a>
      </div>
</div>

        {/* Navigation for Small Screens */}
        <div className="lg:hidden flex items-center">
        <button
          onClick={toggleDropdown}
          className="text-3xl text-slate-900 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ml-10">
          <li>
            <Link to="/instructor/home"><b>Home</b></Link>
          </li>
         
         
          <li className="ml-12  pl-1">
          <Link to="/instructor/courseManagement"> <b>Course Management</b></Link>
          </li>
          <li className="ml-12  pl-1">
            <button onClick={openModal} type='button' className="bg-teal-600 ">
              <b>+ Add New Course</b>
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Add New Course Modal"
              className="w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto bg-slate-200 mt-10 rounded-box"
            >
              {/*  */}
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  {/* <span className="sr-only">Close modal</span> */}
                </button>
              </div>
              <h3 className="text-lg font-semibold text-center pt-5 text-gray-900 dark:text-black">
                Add New Course
              </h3>

              <AddCourse />
            </Modal>
          </li>
           <li className="ml-12  pl-1">
          <Link to="/instructor/chatInstructor"> <b>Chats </b>  <svg
                    fill="teal"
                    viewBox="0 0 16 16"
                    height="1.5em"
                    width="2em"
                  >
                    <path d="M5 8a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z" />
                    <path d="M2.165 15.803l.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 008 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 01-.524 2.318l-.003.011a10.722 10.722 0 01-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 00.693-.125zm.8-3.108a1 1 0 00-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 01-2.088-.272 1 1 0 00-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 00.398-2z" />
                  </svg></Link>
          </li>
        </ul>
      </div>
{/* /////////////////////////////////////////////////////// */}
      {isDropdownOpen && (
        <div className="lg:hidden absolute top-16 right-0  p-4 rounded-2xl bg-white z-50">
          <ul className="menu menu-vertical">
          <li>
            <Link to="/instructor/home"><b>Home</b></Link>
          </li>
         
         
          <li className="">
          <Link to="/instructor/courseManagement"> <b>Course Management</b></Link>
          </li>
          <li className="">
          <Link to="/instructor/chatInstructor"> <b>Chats </b>  <svg
                    fill="teal"
                    viewBox="0 0 16 16"
                    height="1.5em"
                    width="2em"
                  >
                    <path d="M5 8a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z" />
                    <path d="M2.165 15.803l.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 008 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 01-.524 2.318l-.003.011a10.722 10.722 0 01-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 00.693-.125zm.8-3.108a1 1 0 00-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 01-2.088-.272 1 1 0 00-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 00.398-2z" />
                  </svg></Link>
          </li>
          <li className="ml-4">
            <button onClick={openModal} type='button' className="bg-teal-600 ">
              <b>+ Add New Course</b>
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Add New Course Modal"
              className="w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto bg-slate-200 mt-10 rounded-box"
            >
              {/*  */}
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  {/* <span className="sr-only">Close modal</span> */}
                </button>
              </div>
              <h3 className="text-lg font-semibold text-center pt-5 text-gray-900 dark:text-black">
                Add New Course
              </h3>

              <AddCourse />
            </Modal>
          </li>
           
          </ul>
        </div>
      )}

      {/* //////////////////////////////// */}

      <div className="flex-none gap-2">
        
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
                 <Link to='/instructor/Profile'>
                    Profile
                    <span className="badge">New</span>
                    </Link>
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
