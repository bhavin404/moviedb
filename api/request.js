const API_KEY= process.env.TMDB_API_KEY;
const URL= process.env.BASE_URL;

export const getAllMovies = async()=>{

    const res = await fetch(`${URL}/discover/movie?api_key=${API_KEY}`)
    const data = await res.json(); 
    return data;
}
export const getMovieDetails = async(id)=>{
    const res = await fetch(`${URL}/movie/${id}?api_key=${API_KEY}`)
    const data = await res.json(); 
    return data;
}

export const getSimiliarMovies = async(id)=>{

}

export const getSearchedMovies =async(query)=>{
    console.log("searchedquery",query)
    const res = await fetch(`${URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    const data = await res.json();
    return data;

}
