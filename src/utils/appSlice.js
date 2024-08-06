import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        open:true, 
        video:[],
        category:"All",
        searchSuggestion:[],
    },
    reducers:{
        // action
        toggleSidebar:(state)=>{
            state.open = !state.open;
        },
        setHomeVideo:(state,action)=>{
            state.video = action.payload;
        },
        setCategory:(state,action)=>{
            state.category = action.payload;
        },
        setSearchSuggestion:(state,action)=>{
            state.searchSuggestion = action.payload;
        }
         
    } 
});
export const {toggleSidebar,setHomeVideo,setCategory,setSearchSuggestion} = appSlice.actions;
export default appSlice.reducer;
