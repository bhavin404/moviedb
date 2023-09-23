
import { getAllMovies } from '@/api/request';
import SingleCard from './singleCard';

async function Cards() {
    const res = await getAllMovies()
        console.log("yooo",res)
    
  return (
    <div className='cards-section-box'>
      <p className='movie-title mt-3'>All movies</p>
    <div className='cards-section d-flex flex-wrap '>
       {res.results.map((card,index)=>(
       <SingleCard
        key={index}
        details={card}
       />
       ))}
     

    </div>
    </div>
  )
}

export default Cards