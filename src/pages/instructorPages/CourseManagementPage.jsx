import React from 'react';
import InstructorNavbar from '../../components/instructorComponent/InstructorNavbar';
import CourseManagement from '../../components/instructorComponent/CourseManagement'

const CourseManagementPage = () => {
  return (
    <div>
      <div className="items-center bg-slate-300 ">
<InstructorNavbar/>
<CourseManagement/>

      </div>
    </div>
  )
}

export default CourseManagementPage
