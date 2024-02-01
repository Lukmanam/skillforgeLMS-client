import axios from 'axios';
const baseURL = "http://localhost:3000";
const messageInstance = axios.create({ baseURL: baseURL });


export async function getMessages(id) {
    const data = await messageInstance.get(`/message/getMsg/${id}`)
    return data
}

export async function addMessage(data) {
    const datas = await messageInstance.post('/message/addMsg', data)
    return datas
}



