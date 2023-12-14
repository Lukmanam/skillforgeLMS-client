import { Routes,Route } from "react-router-dom";
import StudentSignup from "../pages/studentPages/StudentSignup";
import StudentLogin from "../pages/studentPages/StudentLogin"


const StudentRoute=()=>{
    return(
    <Routes>

        <Route path="/signup" element={<StudentSignup/>}/>
        <Route path="/login" element={<StudentLogin/>}/>
        </Routes>

)}

export default StudentRoute
