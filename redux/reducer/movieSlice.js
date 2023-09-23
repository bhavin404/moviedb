'use client';
import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name:'movie',
    initialState:{
        name:'none',
    },
    reducer:{
        SET_MOVIES:(state,action)=>{
            state.name=action.payload
        }
    }
})

export const {SET_MOVIES}=movieSlice.actions;
export default movieSlice.reducer;