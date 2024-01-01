import { Navigate } from "react-router-dom";

const StudentPublic=(props)=>{
   
    try {
        const token =  localStorage.getItem('studentToken')
        if(token){
          return <Navigate to="/"/>
        }else{
          <Navigate to="/login"/>
          return props.children
        }
      } catch (error) {
        console.log(error.message)
      }
    };

export default StudentPublic;