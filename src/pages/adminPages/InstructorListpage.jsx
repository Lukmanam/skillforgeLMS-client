import AdminNavbar from "../../components/adminComponent/AdminNavbar";
import AdminSidebar from "../../components/adminComponent/AdminSidebar";
import InstructorsList from "../../components/adminComponent/InstructorList";

const InstructorList = () => {
  return (
<>
    <div className="h-16 w-screen">
          <AdminNavbar className="w-1/5" />
          </div>
       <div className="flex w-screen h-screen">
       <div className="w-1/6 h-auto ">
      <AdminSidebar className="w-1/5" />
      </div>
      <div className="w-5/6 h-screen">
        <InstructorsList />
      </div>
    </div>
   </>
  );
};
export default InstructorList;
