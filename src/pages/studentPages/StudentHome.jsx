import React from "react";
import StudentNavbar from "../../components/studentComponent/studentNavbar";
import Banner from "../../components/studentComponent/Banner";
import CourseList from "../../components/studentComponent/courseListComponent";


const StudentHome=()=>{
    return(
        <>
        <StudentNavbar/>
        <Banner/>
        <CourseList/>
        
        </>
    )
}

export default StudentHome