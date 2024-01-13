import React from 'react';
import InstructorNavbar from '../../components/instructorComponent/InstructorNavbar';
import CourseManagement from '../../components/instructorComponent/CourseManagement'

const CourseManagementPage = () => {
  return (
    <div>
      <div className="container items-center">
<InstructorNavbar/>
<CourseManagement/>

      </div>
    </div>
  )
}

export default CourseManagementPage
