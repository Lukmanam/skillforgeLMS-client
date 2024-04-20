import { Navigate } from "react-router-dom";
const InstructorPublic=(props)=>{
    try {
        if (localStorage.getItem("instructorToken")) {
          return <Navigate to="/instructor/home" />;
        } else {
          <Navigate to="/instructor/login" />;
          return props.children;
        }
      } catch (error) {
        console.log(error.message);
      }
    
}

export default InstructorPublic