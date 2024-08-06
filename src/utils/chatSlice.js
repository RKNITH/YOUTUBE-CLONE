import {createSlice} from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        message:[],
    },
    reducers:{
        setMessage:(state,action)=>{
            state.message.splice(100,1);
            state.message.push(action.payload);
        } 
    }
})
export const {setMessage} = chatSlice.actions;
export default chatSlice.reducer; 
