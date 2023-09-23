import React,{useState,useEffect} from 'react'
import './row.css'
import axios from '../../axios'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
const Base_url = 'https://image.tmdb.org/t/p/original'
function Row({title,fetchUrl,isLargeRow}) {
  const [movies,setmovie]= useState([])
  const [trailer,settrailer] = useState("")
  useEffect(()=>{
  async function fechData() {
    const request = await axios.get(fetchUrl)
    // console.log(request)
  setmovie(request.data.results)
    return request
  }
  fechData()
  },[fetchUrl])
  const opts = {
    height:'390',
    width:'100%',
    playerVars:{
     autoplay:1,
    },
  };
  
  const clickhandle = (movie)=>{
    console.log(movie.title)
    if(trailer){
      settrailer("")
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.origonal_name || movie?.original_title)
      .then((url)=>{
        const parseurl = new URLSearchParams(new URL(url).search)
        settrailer(parseurl.get("v"));
      })
      .catch((err)=>console.log(err));
    }
  };
  // console.log(trailer)
 
  return (
   <div className='row key={id}'>
    <h1 className="">{title}</h1>
    <div className='row-posters'>
      {movies.map((movie,i)=>( 
            <img
            key={i}
            onClick={()=> clickhandle(movie)}
              className={`row-poster ${isLargeRow && 'row-posterLarge'} `} src={`${Base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}/>     
      ))}
    </div>
    <div style={{padding:'40px'}}>
      {trailer && <Youtube videoId={trailer}opts={opts}/>}
    </div>
   </div>
  )
}

export default Row