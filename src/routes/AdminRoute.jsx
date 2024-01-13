import { Route,Router, Routes } from "react-router-dom";
import AdminPublic from "./adminPrivate/Adminpublic";
import AdminLogin from "../pages/adminPages/adminLogin";
import AdminDashboard from "../pages/adminPages/AdminDashboard";
import StudentsList from "../pages/adminPages/StudentListpage";
import CoursesListpage from "../pages/adminPages/coursesListpage";
import InstructorList from "../pages/adminPages/InstructorListpage";
import CategoryList from "../pages/adminPages/Categories";
import AdminProtect from "./adminPrivate/AdminProtect";


const AdminRoute=()=>{


    return(
        <Routes>
            <Route path="/" element={<AdminPublic><AdminLogin/></AdminPublic>}/>
            <Route path="/dashboard" element={<AdminProtect><AdminDashboard/></AdminProtect>}/>
            <Route path="/studentsList" element={<AdminProtect><StudentsList/></AdminProtect>}/>
            <Route path="/instructors" element={<AdminProtect><InstructorList/></AdminProtect>}/>
            <Route path="/categoryList" element={<AdminProtect><CategoryList/></AdminProtect>}/>
            <Route path="/courseList" element={<AdminProtect><CoursesListpage/></AdminProtect>}/>
        </Routes>
    )
}
export default AdminRoute