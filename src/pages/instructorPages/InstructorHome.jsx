import React from "react";
import InstructorNavbar from "../../components/instructorComponent/InstructorNavbar";
import InstructorCourse from "../../components/instructorComponent/InstructorCourse";
const InstructorHome=()=>{

    return(
        
        <div className="container">
        <InstructorNavbar/>
        <InstructorCourse/>
        </div>
        
    )
}

export default InstructorHome