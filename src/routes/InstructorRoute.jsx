import { Routes,Route } from "react-router-dom";
import InstructorLogin from "../pages/instructorPages/InstructorLogin";
import InstructorSignup from "../pages/instructorPages/InstructorSignup";
import InstructorOtp from "../pages/instructorPages/InstructorOtp";
import InstructorHome from "../pages/instructorPages/InstructorHome";
import InstructorForgotPassword from "../pages/instructorPages/InstructorForgotPassword";
import InstructorPublic from "./instructorPrivate/InstructorPublic";
import InChangePassword from "../pages/instructorPages/InChangePassword";
import CourseManagement from "../pages/instructorPages/CourseManagementPage";
import UpdateCourse from "../pages/instructorPages/UpdateCourse";
import EditCourse from "../components/instructorComponent/EditCourse";
import InstructorProfile from "../components/instructorComponent/InstructorProfile";
import ChatDashboard from "../pages/instructorPages/ChatDashboard";
import ChatPage from "../pages/instructorPages/ChatPage/ChatPage";
import VideoPage from "../pages/instructorPages/videoChatPage/VideoPage"
import InstructorProtect from "./instructorPrivate/InstructorProtect";




const InstructorRoute=()=>{
return(
<Routes>
    <Route path="/" element={<InstructorPublic><InstructorLogin/></InstructorPublic>}/>
    <Route path="/signup" element={<InstructorSignup/> }/>
    <Route path="/login" element={<InstructorPublic><InstructorLogin/></InstructorPublic>}/>
    <Route path="/insotp" element={<InstructorPublic><InstructorOtp/></InstructorPublic>}/>
    <Route path="/home" element={<InstructorProtect><InstructorHome/> </InstructorProtect>}/>
    <Route path="/forgotPassword" element={<InstructorProtect><InstructorForgotPassword/></InstructorProtect>}/>
    <Route path="/inschangePassword" element={<InstructorProtect><InChangePassword/></InstructorProtect>}/>
    <Route path="/courseManagement" element={<InstructorProtect><CourseManagement/></InstructorProtect>}/>
    <Route path="/updateCourse/:id" element={<InstructorProtect><UpdateCourse/></InstructorProtect>}/>
    <Route path="/editCourse/:id" element={<InstructorProtect><EditCourse/></InstructorProtect>}/>
    <Route path="/Profile" element={<InstructorProtect><InstructorProfile/></InstructorProtect>}/>
    <Route path="/chat" element={<InstructorProtect><ChatDashboard/></InstructorProtect>}></Route>
    <Route path="/chatInstructor" element={<InstructorProtect><ChatPage/></InstructorProtect>}/>
    <Route path="/video" element={<InstructorProtect><VideoPage/></InstructorProtect>}/>
    
    
    
    


</Routes>
)
}


export default InstructorRoute