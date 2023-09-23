import Image from "next/image"
import Link from "next/link"

function SingleCard(props) {
    const Image_Url ="https://www.themoviedb.org/t/p/w220_and_h330_face"
  return (
    <div className="single-card mt-3">
    <Link href={"/movies/"+props.details.id}>

        <div className="card-image">
            <Image className="poster-img" srcset={Image_Url+props.details.poster_path} alt="" />
            <div className="rating-circle d-flex justify-content-center align-items-center">
                {props.details.vote_average}
            </div>
        </div>
        <div className="title mt-2">
            <p>
            {props.details.title}
            </p>
        </div>
        <div className="date">
            {props.details.release_date}
        </div>
    </Link>

    </div>
  )
}

export default SingleCard