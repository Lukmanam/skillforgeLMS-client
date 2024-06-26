import { studentaxiosInstance } from './axiosInstance';
import axios from 'axios';



export const studentSignup = async (signupData) => {
  const data = await studentaxiosInstance.post("/signup", signupData);
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




export const studentLoginVerify = async (loginData) => {
  const Data = await studentaxiosInstance.post('/login', loginData)
  return Data
}


// Mail verification

export const studentforgotpassword = async (email) => {
  const Data = await studentaxiosInstance.post('/studentforgetpassword', email)
  return Data
}


export const studentChangePassword = async (values) => {
  try {
    const Data = await studentaxiosInstance.post('/studentChangePassword', { ...values })
    return Data
  }
  catch (error) {
    console.log(error);
  }
}

export const googleAuth = async (userData) => {
  const data = await studentaxiosInstance.post('/googleSignin', userData)
  return data
}

export const allcategories = async () => {
  const data = await studentaxiosInstance.get("/allCategories");
  return data
}

export const fetchAllCourses = async () => {
  const data = await studentaxiosInstance.get("/fetchAllCourses");
  return data;
}
export const addtoFavCourses = async (courseId, studentId) => {
  try {
    const data = await studentaxiosInstance.post('/addtoFavourite', { courseId, studentId });
    return data;

  } catch (error) {
    console.log(error);
  }
}

export const allCourselist = async () => {
  const data = await studentaxiosInstance.get('/allCourselist');
  return data;
}

export const listCategories = async () => {
  const data = await studentaxiosInstance.get('/allCategoriesList');
  return data;
}

export const favouriteStatus = async (courseId, studentId) => {

  const data = await studentaxiosInstance.post('/checkFavouriteStatus', { courseId, studentId });
  return data;
}

export const fetchFavouriteCourses = async (studentId) => {
  const data = await studentaxiosInstance.get(`/fetchFavouriteCourses/${studentId}`);
  return data;
}


export const fetchCourseData = async (courseId) => {
  const data = await studentaxiosInstance.get(`/fetchCourseData/${courseId}`)
  return data
}


// CourseEnrollment

export const enrollToCourse = async (courseId, studentId) => {
 
  const data = await studentaxiosInstance.post('/enrolltoCourse', { studentId, courseId })
  return data
}

export const checkforEnrollment = async (studentId, courseId) => {
  const data = await studentaxiosInstance.post('/checkEnrollment', { studentId, courseId });
  return data
}

export const fetchEnrolledCourse = async (studentId) => {
  const data = await studentaxiosInstance.get(`/enrolledCourse/${studentId}`)
  return data;
}

export const editStudentProfile = async (studentId, values) => {
  const data = await studentaxiosInstance.post('/editStudentProfile', { studentId, values })
  return data
}

export const paymentApi = async (courseData,student) => {
  try {
    
  
      const data =  studentaxiosInstance.post('/paymentCheckoutSesion', {courseData,student});
      return data;
   

  } catch (error) {
    console.log(error);
  }
}


export const getInstructor=async(courseId)=>{
  const data=await studentaxiosInstance.get(`/getinstructor/${courseId}`);
  return data;
}



export const courseLearn=async(courseId)=>{
  
  const data=await studentaxiosInstance.get(`/learnCourse/${courseId}`);
  
  return data;
}


export const saveCourseProgression=async(courseId,studentId,moduleId)=>{
  const data=await studentaxiosInstance.post('/saveCourseProgress',{courseId,studentId,moduleId});
  return data
}



export const alreadyCompletedModules = async (courseId, studentId) => {
  try {
    const data = await studentaxiosInstance.get('/alreadyCompletedModules', {
      params: {
        courseId: courseId,
        studentId: studentId,
      }})
      return data
    
  } catch (error) {
    console.log(error);
    
  }
}

export const rateCourse=async(rated,review,courseId,studentId)=>{

  const data=await studentaxiosInstance.post('/rateCourse',{rated,review,courseId,studentId});
  return data;
}

export const alreadyRated=async(courseId,studentId)=>{
  try {
    
    const data=await studentaxiosInstance.get('/checkratingStatus',{
      params:{
        courseId: courseId,
        studentId: studentId,
      }
    })
  
    return data;
  } catch (error) {

    console.log(error);
    
  }
}


export const fetchCourseRating=async(courseId)=>{
  const data=await studentaxiosInstance.get(`/fetchCourseRating/${courseId}`);
  return data;
}


export const enableChat=async(studentId,instructorId)=>{
  const data=await studentaxiosInstance.post('/createChat',{studentId,instructorId})
  return data;
}

export const fetchcoursereviews=async(courseId)=>{
  const data=await studentaxiosInstance.get(`/fetchcoursereviews/${courseId}`);
  return data;
}


export const searchCourses=async(searchQuery)=>{
 
    const data=await studentaxiosInstance.get(`/search/${searchQuery}`);
    return data;
  

}

export const filterbyCategory=async (filterCategory)=>{
  const data=await studentaxiosInstance.get(`/categoryFilter/${filterCategory}`);
  return data
}


