import axios from 'axios';
// const baseURL =  "http://localhost:3000";
const baseURL="https://server.shoeniverses.online";
const chatInstance = axios.create({ baseURL: baseURL });

export async function studentData(id) {
    const data = await chatInstance.get(`/chat/studentData/${id}`);
    return data;
}

export async function fetchInstructorDetails(id) {
    const data = await chatInstance.get(`/chat/instructorData/${id}`);
    return data;
}

export async function chatData(studentId) {
    
    const data = await chatInstance.get(`/chat/chat/${studentId}`);
    return data;
}


