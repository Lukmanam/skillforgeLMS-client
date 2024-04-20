import React from "react";
import { app } from "../../firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { instructorLogin } from "../../reduxStore/slices/instructorSlice"; 
import { insgoogleAuth } from "../../../api/instructorApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function OAuthins() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const userData = await signInWithPopup(auth, provider);
  const res = await insgoogleAuth(userData);
  if (res?.status === 200) {
    const { token, instructorData } = res.data;
    localStorage.setItem("instructorToken", token);
    dispatch(
      instructorLogin({
        token: token,
        instructor:instructorData,
      })
    );
    toast.success(res?.data?.message);
    navigate("/instructor/home");
  }

  if (res.status === 500) {
    toast(res?.data?.message);
  }
} catch (error) {
  console.log(error);
}
};

  return (
    <div>
     <button onClick={handleGoogleClick} type='button' className= 'text-black flex items-center justify-center gap-2 w-full  border border-black   rounded-full font-semibold py-2 px-4' style={{ backgroundColor: "white" }}><img
                src="../assets/google.png"
                alt="Google Logo"
                class="w-6 h-6"
              /> Continue with Google</button>
    </div>
  )
}
