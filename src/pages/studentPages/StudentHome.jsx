import React from "react";
import StudentNavbar from "../../components/studentComponent/StudentNavbar";
import Banner from "../../components/studentComponent/Banner";
import CourseList from "../../components/studentComponent/CourseListComponent";


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