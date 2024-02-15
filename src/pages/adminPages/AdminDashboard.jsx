import React from "react";
import AdminNavbar from "../../components/adminComponent/AdminNavbar";
import AdminSidebar from "../../components/adminComponent/AdminSidebar";
import Dashboardadmin from "../../components/adminComponent/Dashboardpart";

const AdminDashboard = () => {
  return (
    <>
     <div className="h-16 w-full">
  <AdminNavbar className="w-full md:w-1/5" />
</div>
<div className="flex flex-col md:flex-row w-full h-screen">
  <div className="w-full md:w-1/6 h-auto">
    <AdminSidebar className="w-full md:w-1/5" />
  </div>
  <div className="w-full md:w-5/6 h-0 bg-slate-700 ml-1">
    <Dashboardadmin />
  </div>
</div>

    </>
  );
};

export default AdminDashboard;
