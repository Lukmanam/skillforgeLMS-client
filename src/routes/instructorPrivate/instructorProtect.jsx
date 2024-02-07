    import { Navigate } from "react-router-dom";
    import { useDispatch } from "react-redux";
    import {instructorLogout} from "../../reduxStore/slices/instructorSlice"
    import { toast } from "react-toastify";
    import  {jwtDecode}  from "jwt-decode";



const InstructorProtect=(props)=>{
    const dispatch=useDispatch();
    try {
        const token=localStorage.getItem("instructorToken");
        console.log(token,"this is token of instructor");
        if(token){
            // const decodedToken=jwtDecode(token);
            // const currentTime=Date.now()/1000;
            // console.log(decodedToken,"decoded token instructor");
            // console.log(currentTime,"currentTime");
        
            // if(decodedToken.exp >currentTime)
            // {
                return props.children;
            // }
            // else
            // {
            //     localStorage.removeItem("instructorToken");
            //     dispatch(instructorLogout());
            //     toast("You must Login  first");
            //     return <Navigate to="/instructor/login"/>
            // }
        }
        else{
            return <Navigate to="/instructor/login" />;
        }
        
    } catch (error) {
        console.log(error.message);
        
    }
};


export default InstructorProtect