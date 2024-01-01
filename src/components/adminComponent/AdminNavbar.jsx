import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { adminLogout } from "../../reduxStore/slices/adminSlice";


const AdminNavbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const { admin } = useSelector((state) => state.adminReducer);
  const handleLogout = async () => {
    console.log("Logging Out");
    localStorage.removeItem("adminToken");
    dispatch(adminLogout());
    toast("LoggedOut Successfully");
    navigate("/admin");
  };

  return (
    
    <div className="navbar  top-0 bg-base-100 z-[2] fixed">
      <div className="flex-1">
        <a className="btn btn-ghost text-4xl"><b>SkillForGe</b></a>
      </div>
      <div className="flex-none">
        
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar "
          >
            <div className="w-10 rounded-full ">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/admin-icon.png"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-0  z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleLogout}><b>Logout</b></a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};




export default AdminNavbar;
