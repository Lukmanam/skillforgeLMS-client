import { instructoraxiosInstance } from "./axiosInstance";
import axios from "axios";


export const instructorSignup=async(signupData)=>{
   
        console.log("this is signup data",signupData);
        const data=await instructoraxiosInstance.post("/signup",signupData)
        console.log("this is instructor api data",data);
        return data     
}
export const instructorResendOtp = async (instructorEmail) => {
        const data = await instructoraxiosInstance.post("/resendotp", { instructorEmail })
        return data
      }

export const instructorotpVerification = async (otp, otpId, instructorId) => {
        const data = await instructoraxiosInstance.post("/insotp", { otp, instructorId })
        return data;
      }

export const InstructorLoginVerify=async(loginData)=>{
        console.log("in instructor Api");
        const Data=await instructoraxiosInstance.post('/login',loginData);
        return Data
}


// Mail send
export const instructorforgotpassword=async(email)=>{

        const data=await instructoraxiosInstance.post('/instructorForgotPassword',email);
        console.log("api data back");
        return data;
}

export const InstructorChangePassword=async(values)=>{
        try {
                console.log({...values},"these are new values")
                console.log("Trying to change instructor Password Api");
                const data=await instructoraxiosInstance.post('/instructorChangePassword',{...values});
                return data
                
        } catch (error) {
                console.log(error,"this is the error occured in Api");
                
        }
}

export const insgoogleAuth=async(userData)=>{
        console.log(userData,"User data here In API");
        const data= await instructoraxiosInstance.post('/googleSignins',userData)
        return data
      }