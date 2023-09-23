'use client';
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './reducer/movieSlice';


export default configureStore({
    reducer:{
        movie:movieReducer,
    }
})