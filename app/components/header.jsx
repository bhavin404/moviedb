'use client'
import Image from 'next/image'
import Link from 'next/link'
import  { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'

function Header() {
  const router=useRouter()
  const number=useSelector(state=>state.allMovies)
  const goToCart = ()=>{
    router.push("/cart")
  }
  return (
    <div >
      <nav className="navbar navbar-expand-lg header">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">Movies-Db</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" href="">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">TV-Shows</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">More</Link>
        </li>
      </ul>
     
    </div>
    <div className="cart">
      <Image alt="cart" onClick={goToCart} className='cursor-pointer'  srcset="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXarpHMfVSh_XWAmdhyemItD0yoFepxga5SX1tSRw&s.png" width={50}/>
      <div className="circle">
        <p>{number.length}</p>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header