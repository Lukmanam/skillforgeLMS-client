    import { Navigate } from "react-router-dom";
    import {jwt_decode} from "jwt-decode";
    import { useDispatch } from "react-redux";
    import {instructorLogout} from "../../reduxStore/slices/instructorSlice"
    import { toast } from "react-toastify";
const instructorProtect=(props)=>{
    const dispatch=useDispatch();
    try {
        const token=localStorage.getItem("instructorToken");
        if(token){
            const decodedToken=jwt_decode(token);
            const currentTime=Date.now()/1000;
            if(decodedToken.exp >currentTime)
            {
                return props.children;
            }
            else
            {
                localStorage.removeItem("instructorToken");
                dispatch(instructorLogout());
                toast("You must Login  first");
                return <Navigate to="/instructor/login"/>
            }
        }
        else{
            return <Navigate to="/instructor/login" />;
        }
        
    } catch (error) {
        console.log(error.message);
        
    }
};
    export default instructorProtect