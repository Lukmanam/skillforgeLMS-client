import { instructoraxiosInstance } from "./axiosInstance";
import axios from "axios";


export const instructorSignup = async (signupData) => {

        const data = await instructoraxiosInstance.post("/signup", signupData)
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
        
        const Data = await instructoraxiosInstance.post('/login', loginData);
        return Data
}


// Mail send
export const instructorforgotpassword = async (email) => {

        const data = await instructoraxiosInstance.post('/instructorForgotPassword', email);
        
        return data;
}

export const InstructorChangePassword = async (values) => {
        try {
                
                const data = await instructoraxiosInstance.post('/instructorChangePassword', { ...values });
                return data

        } catch (error) {
                console.log(error);

        }
}

export const insgoogleAuth = async (userData) => {
        
        const data = await instructoraxiosInstance.post('/googleSignins', userData)
        return data
}

export const addCourseapi = async (addCourseData) => {
        const data = await instructoraxiosInstance.post('/addCourse', { ...addCourseData });
        return data;
}

export const fetchcategories = async () => {
        
        const data = await instructoraxiosInstance.get('/fetchCategories');
       
        return data;
}

export const myCourses = async (instructorId) => {
        try {
                
                const data = await instructoraxiosInstance.get(`/myCourses/${instructorId}`)
            
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

        
        const data = await instructoraxiosInstance.post('/addModule', addModuleData);
        return data;
}

export const deleteModule = async (moduleId, courseId) => {
        try {
                
                const data = await instructoraxiosInstance.post('/deleteModule', { moduleId, courseId });
                return data;

        } catch (error) {
                console.log(error);
        }
}

export const changeListStatus = async (courseId) => {
        
        const data = await instructoraxiosInstance.post('/changeListStatus', { courseId });
        return data;

}

export const checklistStatus = async (courseId) => {
        
        const data = await instructoraxiosInstance.get(`/checkListStatus/${courseId}`);
        return data;
}


export const getCourseData = async (courseId) => {
        const data = await instructoraxiosInstance.get(`/getCourseDetails/${courseId}`);
        return data;
}

export const editCourseapi = async (editCoursedata) => {
        const data = await instructoraxiosInstance.patch('/editCourse', { ...editCoursedata });
        return data;
}

export const editProfileData = async (values, instructorId) => {
        const data = await instructoraxiosInstance.post('/profileData', { ...values, instructorId });
        return data;
}

export const instructorfetch = async (instructorId) => {
        const data = await instructoraxiosInstance.get(`/instructorinchat/${instructorId}`);
        return data
}
