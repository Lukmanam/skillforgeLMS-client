import { Routes,Route } from "react-router-dom";
import InstructorLogin from "../pages/instructorPages/InstructorLogin";
import InstructorSignup from "../pages/instructorPages/instructorSignup";
import InstructorOtp from "../pages/instructorPages/instructorOtp";
import InstructorHome from "../pages/instructorPages/InstructorHome";
import InstructorForgotPassword from "../pages/instructorPages/InstructorForgotPassword";
import InstructorPublic from "./instructorPrivate/instructorPublic";
import InChangePassword from "../pages/instructorPages/InChangePassword";
import CourseManagement from "../pages/instructorPages/CourseManagementPage";
import UpdateCourse from "../pages/instructorPages/UpdateCourse";
import EditCourse from "../components/instructorComponent/EditCourse";
import InstructorProfile from "../components/instructorComponent/InstructorProfile";
import ChatDashboard from "../pages/instructorPages/chatDashboard";
import ChatPage from "../pages/instructorPages/ChatPage/ChatPage";
import VideoPage from "../pages/instructorPages/videoChatPage/VideoPage"




const InstructorRoute=()=>{
return(
<Routes>
    <Route path="/" element={<InstructorPublic><InstructorLogin/></InstructorPublic>}/>
    <Route path="/signup" element={<InstructorSignup/> }/>
    <Route path="/login" element={<InstructorPublic><InstructorLogin/></InstructorPublic>}/>
    <Route path="/insotp" element={<InstructorPublic><InstructorOtp/></InstructorPublic>}/>
    <Route path="/home" element={<InstructorHome/> }/>
    <Route path="/forgotPassword" element={<InstructorForgotPassword/>}/>
    <Route path="/inschangePassword" element={<InChangePassword/>}/>
    <Route path="/courseManagement" element={<CourseManagement/>}/>
    <Route path="/updateCourse/:id" element={<UpdateCourse/>}/>
    <Route path="/editCourse/:id" element={<EditCourse/>}/>
    <Route path="/Profile" element={<InstructorProfile/>}/>
    <Route path="/chat" element={<ChatDashboard/>}></Route>
    <Route path="/chatInstructor" element={<ChatPage/>}/>
    <Route path="/video" element={<VideoPage/>}/>
    
    
    
    


</Routes>
)
}


export default InstructorRoute