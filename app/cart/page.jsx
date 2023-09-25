'use client'
import { REMOVE_MOVIE, SET_MOVIES } from '@/redux/reducer/movieSlice';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Cart() {
    const Image_Url = process.env.Image_Url || "https://image.tmdb.org/t/p/w220_and_h330_face";

    const data=useSelector(state=>state.allMovies);
    // const [datas, setDatas] = useState(data)
    const [index, setIndex] = useState("")
    const dispatch = useDispatch()
    console.log("datass",data)
    const onDelete =(id)=>{
        const index= data.findIndex(obj => obj.id==id)
        setIndex(index)
        dispatch(REMOVE_MOVIE(index))

    }
    const getALLItemfromLocal=()=>{
        console.log("heybro1")
        const data = localStorage.getItem("data");
        const allData = JSON.parse(data)
        console.log("checking",allData)
        // allData?.forEach(element => {
            dispatch(SET_MOVIES(allData||[]))
        // });
        // setDatas(allData)
    }
    const fillAllData=()=>{
        console.log("heybro",data)
       
    }
    useEffect(()=>{
        if(data.length==0){
            getALLItemfromLocal()
        }

        
    },[])
    console.log("firsst==>",data)
    return (
    <div className='cart'>
        {data?.map((details,index)=>
         <div className="card-box d-flex m-3 p-4">
            <div className="card-img d-flex ">
                <Image srcset={Image_Url+details.img}/>
                <p className="ml-3">{details.title}</p>    
            
            </div>

            <div className="card-details">
                <div className="card-button">
                    <button onClick={(e)=>onDelete(details.id)} >Delete</button>
                </div>
            </div>
         
     </div>
        )}
       
    </div>
  )
}

export default Cart