import { Navigate } from "react-router-dom";
// import {jwt_decode} from "jwt-decode";
import { toast } from "react-toastify"
import { useDispatch } from "react-redux";
import { studentLogout } from "../../reduxStore/slices/studentslice";
studentLogout;
function StudentProtect(props){
    const dispatch=useDispatch();
    try {
        const token=localStorage.getItem("studentToken");
        if(token){
        //     const decodedToken=jwt_decode(token);
        //     const currentTime=Date.now()/1000;
        //     if(decodedToken.exp>currentTime){
                return props.children;
            // }
            // else
            // {
            //     localStorage.removeItem("studentToken");
            //     dispatch(studentLogout());
            //     toast("You must Login First");
            //     return <Navigate to="/login"/>
            // }
        }
        else
        {
            toast("You must Login First");
            return <Navigate to="/login"/>
        }
    } catch (error) {
        console.log(error.message);
    }
}
export default StudentProtect;