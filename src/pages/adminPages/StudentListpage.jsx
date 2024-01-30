import AdminNavbar from "../../components/adminComponent/AdminNavbar";
import AdminSidebar from "../../components/adminComponent/AdminSidebar";
import StudentList from "../../components/adminComponent/StudentsList";
import react from "react";

const StudentsList = () => {
  return (
    <>
    <div className="h-16 w-screen">
      <AdminNavbar className="w-1/5" />
    </div>
       <div className="flex w-screen h-screen">
       <div className="w-1/6 h-full ">
      <AdminSidebar className="w-1/5" />
      </div>
      <div className="w-5/6 h-full bg-slate-00">
        <StudentList />
    </div>
    </div>
    </>
  );
};

export default StudentsList;
