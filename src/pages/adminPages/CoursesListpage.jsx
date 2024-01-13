import React from 'react'
import AdminNavbar from '../../components/adminComponent/AdminNavbar'
import AdminSidebar from '../../components/adminComponent/AdminSidebar'
import CourseList from '../../components/adminComponent/courseList'

const CoursesListpage = () => {
  return (
    
      <div className="flex h-screen justify-center items-center pt-2 mb-2">
      <AdminNavbar className="w-1/5" />
      <div className="w-4/5 pl-12 mt-12 pt-12">
     <CourseList/>
      </div>
      <AdminSidebar className="w-1/5" />
    </div>
  
  )
}

export default CoursesListpage
