import { studentaxiosInstance } from './axiosInstance';
import axios from 'axios';



export const studentSignup = async (signupData) => {
  console.log("this is signup data", signupData);
  const data = await studentaxiosInstance.post("/signup", signupData);
  console.log("this is data student api", data);
  return data;

};


export const otpVetification = async (otp, otpId, studentId) => {
  const data = await studentaxiosInstance.post("/otp", { otp, studentId })
  return data;
}



export const studentResendOtp = async (studentEmail) => {
  const data = await studentaxiosInstance.post("/resendotp", { studentEmail })
  return data
}




export const studentLoginVerify=async(loginData)=>
{
  console.log("in student Api");
  const Data=await studentaxiosInstance.post('/login',loginData)
  return Data
}


// Mail verification

export const studentforgotpassword=async(email)=>{
  const Data=await studentaxiosInstance.post('/studentforgetpassword',email)
  return Data
}


export const studentChangePassword=async(values)=>{
  try {
    console.log({...values},"vaaaak")
    const Data=await studentaxiosInstance.post('/studentChangePassword',{...values})
    console.log("this is data");
    return Data
  }
  catch(error){
    console.log(error,"api ile error");
  }
}

export const googleAuth=async(userData)=>{
  console.log(userData,"User data here In API");
  const data= await studentaxiosInstance.post('/googleSignin',userData)
  return data
}

