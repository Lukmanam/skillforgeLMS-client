import AdminNavbar from "../../components/adminComponent/AdminNavbar";
import AdminSidebar from "../../components/adminComponent/AdminSidebar";
import InstructorsList from "../../components/adminComponent/InstructorList";

const InstructorList = () => {
  return (
        <div className="flex h-screen justify-center items-center pt-2 mb-2  ">
        <AdminNavbar className="w-1/5" />
      <div className="w-4/5 pl-12">
        <InstructorsList />
      </div>
      <AdminSidebar className="w-1/5" />
    </div>
    // <>
    //   <AdminNavbar className="w-1/5" />
    //   <div className="bg-red-200 h-screen flex">
    //     <div className="w-1/4 bg-green-200 h-screen">
    //     <AdminSidebar/>
    //     </div>
    //     <div className="w-3/4 bg-green-500 h-screen">
    //     <InstructorsList />
    //     </div>
    //   </div>
    // </>
  );
};
export default InstructorList;
