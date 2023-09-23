import React,{useState,useEffect} from 'react'
import './Banner.css'
import axios from '../../axios'
import requests from '../../request'
const Base_url = 'https://image.tmdb.org/t/p/original'
function Banner() {
  const [movie,setmovie]= useState([])
  useEffect(()=>{
   async function fetchData() {
    const request = await axios.get(requests.fetchnetflixoriginal)
    // console.log(request)
    setmovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
    return request;
   }
   fetchData()
  },[])
  // console.log(movie)
  function truncateString(str, maxLength) {
    return str?.length < maxLength ? str.substr(0,maxLength - 1) + '...' : str
  }
  return (
   <header className='banner' style={{backgroundSize:'cover',
   backgroundImage:`url('${Base_url}${movie.backdrop_path}')`,
   backgroundPosition:'center center',}}>

    <div className='banner_content'>
        <h1 className='banner_tittel'>
          {movie?.titel || movie?.name || movie?.origonal_name}
        </h1>
       <div className='banner_buttons'>
        <button className='banner_button'>Play</button>
        <button className='banner_button'>My List</button>
       </div>
       <h1 className='banner_discription'>{truncateString(movie.overview,150)}</h1>
    </div>
    <div className='banner_fadebuton'/>
   </header>
  )
}

export default Banner