import { Routes,Route } from "react-router-dom";
import InstructorLogin from "../pages/instructorPages/InstructorLogin";
import InstructorSignup from "../pages/instructorPages/instructorSignup";
import InstructorOtp from "../pages/instructorPages/instructorOtp";
import InstructorHome from "../pages/instructorPages/InstructorHome";
import InstructorForgotPassword from "../pages/instructorPages/InstructorForgotPassword";
import InstructorPublic from "./instructorPrivate/instructorPublic";
import InChangePassword from "../pages/instructorPages/InChangePassword";



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


</Routes>
)
}


export default InstructorRoute