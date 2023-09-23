'use client'

import { SET_MOVIES } from "@/redux/reducer/movieSlice"
import { useState } from "react"
import { useDispatch } from "react-redux"



export default function Banner() {
  const [name, setName] = useState("")

  const dispatch = useDispatch()

  const changeName = (e)=>{
    setName(e.target.value)
  }

  const submitData=(e)=>{
    e.preventDefault()
    console.log("target",name)
    dispatch(SET_MOVIES(name))
  }
  return (
    <div className='banner p-5' >
        <div>
        <h1>Welcome.</h1>
        <h2>Millions of movies and tv shows to discover. Explore now</h2>
        </div>
        <form className='mt-5' onSubmit={submitData}>
        <input className='p-2'  type="text" placeholder='Search for a movie,tv show....' onChange={changeName} value={name}/>
        <button className='p-2' type="submit">Search</button>
        </form>

    </div>
  )
}

