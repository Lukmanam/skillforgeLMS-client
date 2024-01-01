import React from "react";
import AdminNavbar from "../../components/adminComponent/AdminNavbar";
import AdminSidebar from "../../components/adminComponent/AdminSidebar";
import Dashboardadmin from "../../components/adminComponent/Dashboardpart";

const AdminDashboard=()=>{
    return(
    <div className="flex h-screen">
    <AdminNavbar className="w-1/5"/>
    <div className="w-3/5 overflow-y-auto" >
    <Dashboardadmin/>
    </div>
    <AdminSidebar className="w-1/5"/>       
    </div>
    )
}

export default AdminDashboard;