import React from 'react'
import AdminNavbar from '../../components/adminComponent/AdminNavbar'
import AdminSidebar from '../../components/adminComponent/AdminSidebar'
import CourseList from '../../components/adminComponent/CourseList'

const CoursesListpage = () => {
  return (
    <>
    <div className="h-16 w-screen">
      <AdminNavbar className="w-1/5" />
      </div>
      <div className="flex w-full h-full">
      <div className="w-1/6 h-auto bg-black">
      <AdminSidebar className="w-1/5" />
      </div>
      <div className="w-5/6 h-full bg-slate-100">
     <CourseList/>
      </div>
      </div>
   </>
  
  )
}

export default CoursesListpage
