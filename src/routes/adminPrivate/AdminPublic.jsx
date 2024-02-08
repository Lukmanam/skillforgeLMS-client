import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const AdminPublic = (props) => {
  try {
    if (localStorage.getItem("adminToken")) {
      return <Navigate to="/admin/dashboard" />;
    } else {
      <Navigate to="/admin" />;
      return props.children;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default AdminPublic;






