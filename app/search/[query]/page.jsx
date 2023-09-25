'use client'
import { getSearchedMovies } from '@/api/request';
import Banner from '@/app/components/banner'
import SingleCard from '@/app/components/singleCard';
import React, { useEffect, useState } from 'react'

 function Search({params}) {
  const [result, setResult] = useState([])
  const [number, setNumber] = useState(10)
    const query= params.query;

    const  getSearchMovieFunc = async()=>{
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=26eb8fe0ea17478b691097b4e10c4ac9&query=${query}`)
      .then((res)=>res.json())
      .then((data)=>setResult(data.results))
      .catch((err)=>console.log("response-error",err))

    }
    useEffect(() => {
      
      getSearchMovieFunc();
    
      
    }, [])


    const next =()=>{
      setNumber(number+10);

    }

    return (
    <div>
      <Banner/>
      <div className='cards-section-box'>
      <p className='movie-title mt-3'>Searched Movies</p>
      <div className='cards-section d-flex flex-wrap my-3'>

       {result.slice(0,number).map((card,index)=>(
       <SingleCard
        key={index}
        details={card}
       />
       ))}

       
     

    </div>

      </div>

      <div className='pagination-btn mb-5'>
        {result.length > number && <button onClick={next}>next</button>        }

      </div>
    </div>
  )
}

export default Search