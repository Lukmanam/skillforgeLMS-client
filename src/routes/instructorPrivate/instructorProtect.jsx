    import { Navigate } from "react-router-dom";
    import { useDispatch } from "react-redux";
    import {instructorLogout} from "../../reduxStore/slices/instructorSlice"
    import { toast } from "react-toastify";
    import  {jwtDecode}  from "jwt-decode";



const InstructorProtect =(props)=>{
    const dispatch=useDispatch();
    try {
        const token=localStorage.getItem("instructorToken");
        if(token){
                return props.children;
        }
        else{
            return <Navigate to="/instructor/login" />;
        }
        
    } catch (error) {
        console.log(error.message);
        
    }
};

export default InstructorProtect