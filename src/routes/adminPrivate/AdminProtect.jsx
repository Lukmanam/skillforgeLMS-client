import { Navigate } from "react-router-dom";
import  {jwtDecode}  from "jwt-decode";
import { adminLogout } from "../../reduxStore/slices/adminSlice";
import { useDispatch } from "react-redux";
import {toast} from 'react-toastify'



const AdminProtect=(props)=>{
    const dispatch=useDispatch();
    try {
       
        const token=localStorage.getItem("adminToken");
        if(token){
            const decodedToken=jwtDecode(token);
            const currentTime=Date.now()/1000;
            if(decodedToken.exp>currentTime)
            {
                    return props.children;
            }
            else{
                localStorage.removeItem("adminToken");
                dispatch(adminLogout());
                toast("You need to Login First")
                return <Navigate to="/admin"/>
            }
        }
        else
        {
            return <Navigate to="/admin"/>
        }
    } catch (error) {
        console.log(error.message);
        
    }
}

export default AdminProtect;