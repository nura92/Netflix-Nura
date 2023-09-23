import React,{ useState } from 'react'



import Row from '../components/Row/Row'
import Banner from '../components/banner/Banner'
import Nav from '../components/nav/Nav'
import requests from '../request'


function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className='App'>
      <Nav isScrolled={isScrolled}/>
      <Banner/> 
        <Row title='NETFLIX ORIGINAL ' fetchUrl={requests.fetchnetflixoriginal} isLargeRow/>
        <Row title='NETFLIX TRENDING ' fetchUrl={requests.fetchtradings}/>
        <Row title='MOVIE TOP RATED ' fetchUrl={requests.fetchtopRated}/>
        <Row title=' ACTION MOVIE' fetchUrl={requests.fetchActionMovie}/>
        <Row title=' COMEDY MOVIE' fetchUrl={requests.fetchComedyMovie}/>
        <Row title=' ROMANCE MOVIE ' fetchUrl={requests.fetchRomanceMovie}/>
        <Row title=' HOROR MOVIE ' fetchUrl={requests.fetchHororMovie}/>
        <Row title=' DOCMENTERY MOVIE ' fetchUrl={requests.fetchDocmentery}/>
    </div>
  )
}

export default Netflix