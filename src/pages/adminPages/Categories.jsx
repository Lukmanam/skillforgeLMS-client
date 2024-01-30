import AdminNavbar from "../../components/adminComponent/AdminNavbar";
import AdminSidebar from "../../components/adminComponent/AdminSidebar";
import CourseCategory from "../../components/adminComponent/CourseCategory";
const CategoryList = () => {
  return (
    <>
      <div className="h-16 w-screen">
        <AdminNavbar className="w-1/5" />
      </div>
      <div className="flex w-screen h-full">
        <div className="w-1/6 h-auto">
          <AdminSidebar className="w-1/5" />
        </div>
        <div className="w-5/6 h-screen bg-slate-100">
        <CourseCategory />
      </div>
      </div>
     
    </>
  );
};
export default CategoryList;
