import { Routes,Route } from "react-router-dom";
import InstructorLogin from "../pages/instructorPages/instructorLogin";
import InstructorSignup from "../pages/instructorPages/instructorSignup";

const InstructorRoute=()=>{


return(
<Routes>
    <Route path="/signup" element={<InstructorSignup/>}/>
    <Route path="/login" element={<InstructorLogin/>}/>
</Routes>
)
}


export default InstructorRoute