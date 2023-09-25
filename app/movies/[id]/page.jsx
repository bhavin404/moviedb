'use client'
import { getMovieDetails } from "@/api/request"
import { SET_MOVIES } from "@/redux/reducer/movieSlice"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

function MovieDetailsPage({params}) {
  const [movieDetails, setMoviesDetails] = useState({})
  const dispatch = useDispatch()

  const  getMovieDetails = async()=>{
    console.log("called")
    fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=26eb8fe0ea17478b691097b4e10c4ac9`)
    .then((res)=>res.json())
    .then((data)=>setMoviesDetails(data))
    .catch((err)=>console.log("response-error",err))

  }

  useEffect(()=>{
    getMovieDetails()
  },[])

  // const movieDetails = await getMovieDetails(params.id)
  const {title,overview,genres ,runtime}=movieDetails

  const Image_Url =process.env.Image_Url || "https://www.themoviedb.org/t/p/w220_and_h330_face";

  // const sendToWatchlist = ()=>{
  //   const details = {
  //     id:movieDetails.id,
  //     title:movieDetails.title,
  //     img:movieDetails.poster_path

  //   }
  //   dispatch(SET_MOVIES(details))
  //   const local = localStorage.getItem("data")
  //   const objLocal= JSON.parse(local)
  //   if(local){
  //   const localArray = [...objLocal,details]
  //   console.log("datsss",localArray)
  //   localStorage.setItem("data",JSON.stringify(localArray))


  //   }else{
  //     localStorage.setItem("data",JSON.stringify(details))

  //   }
    
  // }
  const sendToWatchlist = () => {
    const details = {
      id: movieDetails.id,
      title: movieDetails.title,
      img: movieDetails.poster_path,
    };
  
    const local = localStorage.getItem("data");
    let localArray = [];
  
    if (local) {
      localArray = JSON.parse(local);
    }
  
    localArray.push(details);
  
    localStorage.setItem("data", JSON.stringify(localArray));
  
    dispatch(SET_MOVIES(details));
  
    console.log("datsss", localArray);
  };
  
  return (
    <div>
        <div className="details-box p-5 d-flex">
          <div className="details-img">
            <Image srcset={Image_Url+movieDetails.poster_path} />
          </div>
          <div className="description-box">
          <div className="title-genre">
           <h3 className="title"> {title}</h3>
            <span>Genre: </span>{movieDetails.genres?.map((genre,id)=> <span>{genre.name} </span>)}
          </div>
          <div className="overview mt-3">
          <b>Overview:</b>
          <p>{overview}</p>

          </div>
          <div className="runtime-watchlist d-flex ">
            <b>Runtime:</b>
              <p>{runtime} min</p>
          </div>
          
          <div className="save-movie">
          <button className="px-3 py-2" onClick={sendToWatchlist} >Save</button>
          </div>
          </div>
        </div>  
    </div>
  )
}

export default MovieDetailsPage