import React from "react";
import StudentNavbar from "../../components/studentComponent/StudentNavbar";
import Banner from "../../components/studentComponent/Banner";
import CourseList from "../../components/studentComponent/CourseListComponent";
import StudentFooter from "../../components/studentComponent/StudentFooter";


const StudentHome=()=>{
    return(
        <>
        <StudentNavbar/>
        <Banner/>
        <CourseList/>
        <StudentFooter/>
        </>
    )
}

export default StudentHome