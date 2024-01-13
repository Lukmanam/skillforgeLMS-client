import AdminNavbar from "../../components/adminComponent/AdminNavbar";
import AdminSidebar from "../../components/adminComponent/AdminSidebar";
import CourseCategory from "../../components/adminComponent/CourseCategory";
const CategoryList=()=>{
    return(
        <>
        <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center mb-2">
          <AdminNavbar className="w-1/5" />
        </div>
        <div className="flex justify-center items-center w-3/4 mt-10">
          <CourseCategory />
        </div>
      </div>
      <div>
        <AdminSidebar className="w-1/5" />
      </div>
      </>
      
      
    )

}
export default CategoryList