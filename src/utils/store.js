import {configureStore} from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import chatReducer from "./chatSlice";

const store = configureStore({
    reducer:{
        app:appReducer,
        chat:chatReducer
    }
})
export default store;
