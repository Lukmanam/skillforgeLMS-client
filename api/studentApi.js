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




export const studentLoginVerify = async (loginData) => {
  console.log("in student Api");
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
    console.log({ ...values }, "vaaaak")
    const Data = await studentaxiosInstance.post('/studentChangePassword', { ...values })
    console.log("this is data");
    return Data
  }
  catch (error) {
    console.log(error, "api ile error");
  }
}

export const googleAuth = async (userData) => {
  console.log(userData, "User data here In API");
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
    console.log("in api favourite Courses", courseId, studentId);
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
  console.log(courseId, studentId, "in api for favourirwe");

  const data = await studentaxiosInstance.post('/checkFavouriteStatus', { courseId, studentId });
  console.log(data);
  return data;
}

export const fetchFavouriteCourses = async (studentId) => {
  const data = await studentaxiosInstance.get(`/fetchFavouriteCourses/${studentId}`);
  return data;
}


export const fetchCourseData = async (courseId) => {
  console.log("In student Api for fetching courseData");
  const data = await studentaxiosInstance.get(`/fetchCourseData/${courseId}`)
  return data
}


// CourseEnrollment

export const enrollToCourse = async (courseId, studentId) => {
  console.log("in Api to enrolment");
  console.log(courseId, "this is courseId");
  console.log(studentId, "this is student id");
  const data = await studentaxiosInstance.post('/enrolltoCourse', { studentId, courseId })
  return data
}

export const checkforEnrollment = async (studentId, courseId) => {
  console.log(studentId, "student", courseId, "course");
  const data = await studentaxiosInstance.post('/checkEnrollment', { studentId, courseId });
  return data
}

export const fetchEnrolledCourse = async (studentId) => {
  console.log(studentId, "student Id to fetch saved Courses in api");
  const data = await studentaxiosInstance.get(`/enrolledCourse/${studentId}`)
  return data;
}

export const editStudentProfile = async (studentId, values) => {
  console.log("in api", values);
  const data = await studentaxiosInstance.post('/editStudentProfile', { studentId, values })
  return data
}

export const paymentApi = async (courseData,student) => {
  try {
    console.log("in payment Api", courseData);
    console.log(student,"this is student in api");
  
      const data =  studentaxiosInstance.post('/paymentCheckoutSesion', {courseData,student});
      console.log(data, "api data");
      return data;
   

  } catch (error) {
    console.log("api Error", error);
  }
}


export const getInstructor=async(courseId)=>{
  console.log(courseId,"courseId of enrollment in Api");
  const data=await studentaxiosInstance.get(`/getinstructor/${courseId}`);
  console.log(data,"data in return Api");
  return data;
}



export const courseLearn=async(courseId)=>{
  console.log("fetching data from api");
  const data=await studentaxiosInstance.get(`/learnCourse/${courseId}`);
  console.log(data,"Course Learining data");
  return data;
}


export const saveCourseProgression=async(courseId,studentId,moduleId)=>{
  console.log("data passing to save course Progrtess");
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
    
    console.log("in Api", courseId,"helo courseId",studentId,"Student Id for checking ");
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
  console.log(courseId,"fetch course review");
  const data=await studentaxiosInstance.get(`/fetchcoursereviews/${courseId}`);
  return data;
}


export const searchCourses=async(searchQuery)=>{
 
    console.log(searchQuery,"this is searching");
    const data=await studentaxiosInstance.get(`/search/${searchQuery}`);
    return data;
  

}

export const filterbyCategory=async (filterCategory)=>{
  console.log(filterCategory);
  const data=await studentaxiosInstance.get(`/categoryFilter/${filterCategory}`);
  return data
}


