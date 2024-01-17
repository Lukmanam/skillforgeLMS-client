import { instructoraxiosInstance } from "./axiosInstance";
import axios from "axios";


export const instructorSignup = async (signupData) => {

        console.log("this is signup data", signupData);
        const data = await instructoraxiosInstance.post("/signup", signupData)
        console.log("this is instructor api data", data);
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

export const InstructorLoginVerify = async (loginData) => {
        console.log("in instructor Api");
        const Data = await instructoraxiosInstance.post('/login', loginData);
        return Data
}


// Mail send
export const instructorforgotpassword = async (email) => {

        const data = await instructoraxiosInstance.post('/instructorForgotPassword', email);
        console.log("api data back");
        return data;
}

export const InstructorChangePassword = async (values) => {
        try {
                console.log({ ...values }, "these are new values")
                console.log("Trying to change instructor Password Api");
                const data = await instructoraxiosInstance.post('/instructorChangePassword', { ...values });
                return data

        } catch (error) {
                console.log(error, "this is the error occured in Api");

        }
}

export const insgoogleAuth = async (userData) => {
        console.log(userData, "User data here In API");
        const data = await instructoraxiosInstance.post('/googleSignins', userData)
        return data
}

export const addCourseapi = async (addCourseData) => {
        console.log("haaaai");
        console.log(addCourseData);
        const data = await instructoraxiosInstance.post('/addCourse', { ...addCourseData });
        return data;
}

export const fetchcategories = async () => {
        console.log("Fetch categories Api");
        const data = await instructoraxiosInstance.get('/fetchCategories');
        console.log(data);
        return data;
}

export const myCourses = async (instructorId) => {
        try {
                console.log(instructorId);
                const data = await instructoraxiosInstance.get(`/myCourses/${instructorId}`)
                console.log(data);
                return data;

        } catch (error) {
                console.log(error);

        }

}
export const fetchCourseData = async (courseId) => {

        const data = await instructoraxiosInstance.get(`/fetchCourseData/${courseId}`);
        return data;
}

export const AddModuleapi = async (addModuleData) => {

        console.log("inj add Module Api", addModuleData);
        const data = await instructoraxiosInstance.post('/addModule', addModuleData);
        return data;
}

export const deleteModule = async (moduleId,courseId) => {
        try {
                console.log(moduleId,"this is module id");
                console.log(courseId,"this is course Id");
                const data = await instructoraxiosInstance.post('/deleteModule',  {moduleId,courseId });
                return data;
                
        } catch (error) {
         console.log(error);       
        }
}

export const changeListStatus=async(courseId)=>{
        console.log(courseId,"For Changing status");
        const data=await instructoraxiosInstance.post('/changeListStatus',{courseId});
        return data;

}

export const checklistStatus=async(courseId)=>{
        console.log("checking list status",courseId);
        const data=await instructoraxiosInstance.get(`/checkListStatus/${courseId}`);
        return data;
}


export const getCourseData=async(courseId)=>{
        console.log("courseId for get data",courseId);
        const data=await instructoraxiosInstance.get(`/getCourseDetails/${courseId}`);
        return data;
}

export const editCourseapi=async(editCoursedata)=>{
        const data = await instructoraxiosInstance.patch('/editCourse', { ...editCoursedata });
        return data;
}

export const editProfileData=async(values,instructorId)=>{
        console.log("values in API",values);
        const data=await instructoraxiosInstance.post('/profileData',{...values,instructorId});
        return data;
}
