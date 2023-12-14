import {studentaxiosInstance} from './axiosInstance';
import axios from 'axios';


export const studentSignup = async (signupData) => {
  console.log("this is signup data",signupData);
        const data = await studentaxiosInstance.post("/signup", signupData);
        console.log("this is data student api",data);
        return data;
   
  };

// export const studentSignup=async (signupData)=>{
//     try {
//         const data=await axios.post('http://localhost:3000/signup',{...signupData});
//    return data
//     } catch (error) {
//         console.error("failure is",error)
//     }
    

//     return data;
// }
