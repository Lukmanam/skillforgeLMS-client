import { adminAxiosInstance, studentaxiosInstance } from "./axiosInstance";

export const adminLoginVerify=async(loginData)=>{
    console.log("admin Login verify in API");
    const data=await adminAxiosInstance.post("/login",loginData);
    return data
}

export const studentsList=async()=>{
    const data=await adminAxiosInstance.get("/students");
    return data
}

export const addCategory=async(category)=>{
 try {
     const data=await adminAxiosInstance.post('/addCategory',category);
     console.log(data,"thius nis admin apiu aeeror");
     return data;
    
 } catch (error) {
    console.log(error.response.data);

    return error.response;
    
 }
}

export const categoriesList=async()=>{
    const data=await adminAxiosInstance.get("/categories");
    return data;
}

export const changeCategorystatus=async(categoryId)=>{
    const data=await adminAxiosInstance.post('/listUnlist',{categoryId});
    return data
}

export const studentBlock=async(studentId,status)=>{
    const data=await adminAxiosInstance.patch("/studentBlock",{studentId,status});
    return data;
}

export const instroctorsList=async()=>{
    const data=await adminAxiosInstance.get("/instructors");
    return data;
}

export const instructorBlock=async(instructorId,status)=>{
    const data=adminAxiosInstance.patch("/instructorBlock",{instructorId,status})
    return data
}

export const fetchInstructorsCount=async()=>{
    const data=adminAxiosInstance.get("/instructorCount");
    return data
}

export const fetchStudentsCount=async()=>{
    const data=adminAxiosInstance.get("/studentsCount");
    return data
}


export const courses=async()=>{
    const data=await adminAxiosInstance.get('/courses');
    return data;
}

export const courseApprove=async(courseId)=>{
    const data=await adminAxiosInstance.post('/courseApproval',{courseId});
    return data;
}










