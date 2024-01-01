import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"student",
    initialState:{
    token:"",
    student:null
    },
    reducers:{
        studentLogin:(state,action)=>{
            state.token=action.payload.token
            state.student=action.payload.student
        },
        studentLogout:(state,action)=>{
            state.token="",
            state.student=null
        }
    }

})

export const {studentLogin,studentLogout}=userSlice.actions
export default userSlice.reducer