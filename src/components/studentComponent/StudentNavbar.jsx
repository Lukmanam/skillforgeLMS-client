import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { studentLogout } from "../../reduxStore/slices/studentslice";
import { allcategories } from "../../../api/studentApi";

const StudentNavbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [categories, setCategories] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    allcategories()
      .then((res) => {
        setCategories(res?.data?.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { student } = useSelector((state) => state.studentReducer);
  const handleLogout = async () => {
    console.log("Logging out Student");
    localStorage.removeItem("studentToken");
    dispatch(studentLogout());
    toast("LoggedOut Successfully ");
    navigate("/login");
  };

  return (
    <div className="navbar bg-base-100 w-full flex items-center justify-between px-4">
      <div className="flex items-center mr-13">
        <img
          src="./assets/skillforge.svg"
          className="h-12 mr-4 pr-12"
          alt="logo"
        />
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

      {/* Navigation for large screen*/}
      <div className="items-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ml-10">
          <Link to="/">
            {" "}
            <li>
              <a className="ml-12 ">
                <b>Home</b>
              </a>
            </li>
          </Link>
          <Link to="/courses">
            {" "}
            <li>
              <a className="ml-12  ">
                <b>Courses</b>
              </a>
            </li>
          </Link>
          <li>
            <details className="ml-12 ">
              <summary>
                <a className="pl-5 pr-5">
                  <b>Learn</b>
                </a>
              </summary>
              <ul className="">
                {
                  categories && categories.length > 0 ? (
                    categories.map((data) => (
                      <li>
                        <a>{data.name}</a>
                      </li>
                    ))
                  ) : (
                    <li>Category Not Available</li>
                  )

                  // Loading state or something else while categories are being fetched
                }
              </ul>
            </details>
          </li>
          <Link to={"/enrolledCourses"}>
            <li className="ml-12  pl-1">
              <a>
                <b>MyCourses</b>
              </a>
            </li>
          </Link>
          <li className="ml-12  pl-1">
            <Link to="/chatStudent">
              {" "}
              <b>Chats </b>{" "}
              <svg fill="teal" viewBox="0 0 16 16" height="1.5em" width="2em">
                <path d="M5 8a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z" />
                <path d="M2.165 15.803l.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 008 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 01-.524 2.318l-.003.011a10.722 10.722 0 01-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 00.693-.125zm.8-3.108a1 1 0 00-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 01-2.088-.272 1 1 0 00-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 00.398-2z" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>

      {isDropdownOpen && (
        <div className="lg:hidden absolute top-16 right-0 bg-base-100 p-4">
          <ul className="menu menu-vertical">
            <Link to="/">
              <li>
                <a className="ml-12">
                  <b>Home</b>
                </a>
              </li>
            </Link>
            <Link to="/courses">
              {" "}
              <li>
                <a className="ml-12  ">
                  <b>Courses</b>
                </a>
              </li>
            </Link>
            <li>
              <details className="ml-12 ">
                <summary>
                  <a className="pl-5 pr-5">
                    <b>Learn</b>
                  </a>
                </summary>
                <ul className="">
                  {categories && categories.length > 0 ? (
                    categories.map((data) => (
                      <li>
                        <a>{data.name}</a>
                      </li>
                    ))
                  ) : (
                    <li>Category Not Available</li>
                  )}
                </ul>
              </details>
            </li>
            <Link to={"/enrolledCourses"}>
              <li className="ml-12  pl-1">
                <a>
                  <b>MyCourses</b>
                </a>
              </li>
            </Link>
            <li className="ml-12  pl-1">
              <Link to="/chatStudent">
                {" "}
                <b>Chats </b>{" "}
                <svg fill="teal" viewBox="0 0 16 16" height="1.5em" width="2em">
                  <path d="M5 8a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z" />
                  <path d="M2.165 15.803l.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 008 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 01-.524 2.318l-.003.011a10.722 10.722 0 01-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 00.693-.125zm.8-3.108a1 1 0 00-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 01-2.088-.272 1 1 0 00-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 00.398-2z" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      )}

      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
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
            {student ? (
              <>
                <Link to="/studentProfile">
                  <li>
                    <li>Profile</li>
                  </li>
                </Link>

                <Link to="/favouriteCourses" className="justify-between ">
                  <li>
                    <li>Saved Courses</li>
                  </li>
                </Link>

                <li>
                  <a onClick={handleLogout}>
                    <b>Logout</b>
                  </a>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentNavbar;
