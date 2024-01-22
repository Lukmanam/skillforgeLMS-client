import { Routes,Route } from "react-router-dom";
import StudentSignup from "../pages/studentPages/StudentSignup";
import StudentLogin from "../pages/studentPages/StudentLogin"
import StudentOtp from "../pages/studentPages/studentOtp";
import StudentHome from "../pages/studentPages/studentHome";
import StudentForgotPassword from "../pages/studentPages/StudentForgotPassword";
import StudentPublic from "./studentPrivate/StudentPublic";
import StudentProtect from "./studentPrivate/StudentProtect";
import ChangePassword from "../pages/studentPages/ChangePassword";
import FavouriteCourses from "../components/studentComponent/FavouriteCourses";
import CourseDetals from "../components/studentComponent/CourseDetals";
import EnrolledCourses from "../components/studentComponent/EnrolledCourses";
import StudentProfile from "../components/studentComponent/StudentProfile";
import AllCourse from "../pages/studentPages/AllCourse";
import EnrollSuccess from "../components/studentComponent/EnrollSuccess";
import LearningPage from "../pages/studentPages/LearningPage";




const StudentRoute=()=>{
    return(
    <Routes>

        <Route path="/" element={<StudentHome/>}/>
        <Route path="/home" element={<StudentHome/>}/>
        <Route path="/signup" element={<StudentPublic><StudentSignup/></StudentPublic>}/>
        <Route path="/login" element={<StudentPublic><StudentLogin/></StudentPublic>}/>
        <Route path="/otp" element={<StudentOtp/>}/>
        <Route path="/stforgotPassword" element={<StudentForgotPassword/>}></Route>
        <Route path="/changepassword" element={<ChangePassword/>}></Route>
        <Route path="/favouriteCourses" element={<FavouriteCourses/>}/>
        <Route path="/CourseDetails/:courseId" element={<CourseDetals/>}></Route>
        <Route path="/enrolledCourses"element={<EnrolledCourses/>}/>
        <Route path="/studentProfile" element={<StudentProfile/>}/>
        <Route path="/courses" element={<AllCourse/>}/>
        <Route path="/enrollSuccess/:courseId" element={<EnrollSuccess/>}/>
        <Route path="/learn/:courseId" element={<LearningPage/>}/>
      
        
        </Routes>

)}

export default StudentRoute;
