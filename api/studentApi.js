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

export const allcategories=async()=>{
  console.log("in category fetch Api");
  const data=await studentaxiosInstance.get("/allCategories");
  console.log(data);
  return data
}

export const fetchAllCourses=async()=>{
  const data= await studentaxiosInstance.get("/fetchAllCourses");
  return data;
}
export const addtoFavCourses=async(courseId,studentId)=>{
try {
  console.log("in api favourite Courses",courseId,studentId);
  const data=await studentaxiosInstance.post('/addtoFavourite',{courseId,studentId});
  return data;
  
} catch (error) {
  console.log(error);
}
}

export const favouriteStatus=async(courseId,studentId)=>{
  console.log(courseId,studentId,"in api for favourirwe");
  
  const data=await studentaxiosInstance.post('/checkFavouriteStatus',{courseId,studentId});
  console.log(data);
  return data;
}

export const fetchFavouriteCourses=async(studentId)=>{
  const data=await studentaxiosInstance.get(`/fetchFavouriteCourses/${studentId}`);
  return data;
}


export const fetchCourseData=async(courseId)=>{
  console.log("In student Api for fetching courseData");
  const data=await studentaxiosInstance.get(`/fetchCourseData/${courseId}`)
  return data
}


// CourseEnrollment

export const enrollToCourse=async(courseId,studentId)=>{
  console.log("in Api to enrolment");
  console.log(courseId,"this is courseId");
  console.log(studentId,"this is student id");
  const data=await studentaxiosInstance.post('/enrolltoCourse',{studentId,courseId})
  return data
}

export const checkforEnrollment=async(studentId,courseId)=>{
  console.log(studentId,"student",courseId,"course");
  const data=await studentaxiosInstance.post('/checkEnrollment',{studentId,courseId});
  return data
}

export const fetchEnrolledCourse=async(studentId)=>{
  console.log(studentId,"student Id to fetch saved Courses in api");
  const data=await studentaxiosInstance.get(`/enrolledCourse/${studentId}`)
  return data;
}

export const editStudentProfile=async(studentId,values)=>{
  console.log("in api",values);
const data=await studentaxiosInstance.post('/editStudentProfile',{studentId,values})
return data
}


