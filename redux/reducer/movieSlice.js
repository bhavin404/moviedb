'use client';
import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name:'movie',
    initialState:{
        searchMovie:"",
        allMovies:[]
    },
    reducers:{
        SET_MOVIES:(state,action)=>{
            console.log("dataaaaa",action.payload)

            if(action.payload?.length>0){
                state.allMovies=[...action.payload]

            }else{
                state.allMovies=[...state.allMovies,action.payload]
            }
            // if(state.allMovies.length==0){

            // }
        },
        REMOVE_MOVIE:(state,action)=>{
            console.log("payload",action)
            state.allMovies.splice(action.payload,1)
            localStorage.setItem("data",JSON.stringify(state.allMovies))

        }

    }
})

export const {SET_MOVIES}= movieSlice.actions;
export const {REMOVE_MOVIE}= movieSlice.actions;
export default movieSlice.reducer;