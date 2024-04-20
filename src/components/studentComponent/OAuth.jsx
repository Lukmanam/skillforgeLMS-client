import React from "react";
import { app } from "../../firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { studentLogin } from "../../reduxStore/slices/studentslice";
import { googleAuth } from "../../../api/studentApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function OAuth() {
    const dispatch = useDispatch();
  const navigate = useNavigate();
    
    const handleGoogleClick = async () => {
        try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const userData = await signInWithPopup(auth, provider);
      const res = await googleAuth(userData);
      if (res?.status === 200) {
        const { token, studentData } = res.data;
        localStorage.setItem("studentToken", token);
        dispatch(
          studentLogin({
            token: token,
            student: studentData,
          })
        );
        toast(res?.data?.message);
        navigate("/home");
      }

      if (res.status === 500) {
        toast(res?.data?.message);
      }
    } catch (error) {
      console.log(error, "Couldnot with Google");
    }
  };

  return (
    <div>
      <button
        onClick={handleGoogleClick}
        type="button"
        className="text-black flex items-center justify-center gap-2 w-full border border-black  rounded-full font-semibold py-2 px-4"
        style={{ backgroundColor: "white" }}
      >
        <img src="./assets/google.png" alt="Google Logo" class="w-6 h-6" />{" "}
        Continue with Google
      </button>
    </div>
  );
}
