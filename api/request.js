const API_KEY= process.env.TMDB_API_KEY;
const URL= process.env.URL;
console.log("checkk",API_KEY,URL)

export const getAllMovies = async()=>{
    const res = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=26eb8fe0ea17478b691097b4e10c4ac9")
    const data = res.json(); 
    console.log("heybuddy",data)
    return data;
}