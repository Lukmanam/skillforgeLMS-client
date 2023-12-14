import { instructoraxiosInstance } from "./axiosInstance";
import axios from "axios";


export const instructorSignup=async(signupData)=>{
   
        console.log("this is signup data",signupData);
        const data=await instructoraxiosInstance.post("/signup",signupData)
        console.log("this is instructor api data",data);
        return data
       
    
}