import { adminAxiosInstance } from "./axiosInstance";

export const adminLoginVerify=async(loginData)=>{
    console.log("admin Login verify in API");
    const data=await adminAxiosInstance.post("/login",loginData);
    return data
}

export const studentsList=async()=>{
    const data=await adminAxiosInstance.get("/students");
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
