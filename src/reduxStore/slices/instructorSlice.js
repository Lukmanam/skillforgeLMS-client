import { createSlice } from "@reduxjs/toolkit";

const instructorSlice= createSlice({
    name:"instructor",
    initialState:{
        token:"",
        instructor:null
    },
    reducers:{
        instructorLogin:(state,action)=>{
            state.token=action.payload.token
            state.instructor=action.payload.instructor
        },
        instructorLogout:(state)=>{
            state.instructor={
                token:"",
                instructor:null
            }
        }
    }
})

export const {instructorLogin,instructorLogout}=instructorSlice.actions
export default instructorSlice.reducer