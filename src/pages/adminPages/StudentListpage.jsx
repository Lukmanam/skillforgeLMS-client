import AdminNavbar from "../../components/adminComponent/AdminNavbar";
import AdminSidebar from "../../components/adminComponent/AdminSidebar";
import StudentList from "../../components/adminComponent/StudentsList";
import react from "react";

const StudentsList = () => {
  return (
    <div className="flex h-screen justify-center items-center pt-2 mb-2">
      <AdminNavbar className="w-1/5" />
      <div className="w-4/5 pl-12 mt-12 pt-12">
        <StudentList />
      </div>
      <AdminSidebar className="w-1/5" />
    </div>
  );
};

export default StudentsList;
