
const API_KEY = '305a59515d6e041889cb15608957a3a2'
const requests = {
  fetchtradings:`/trending/all//week?api_key=${API_KEY}&language=en-us`,
  fetchnetflixoriginal:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchtopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  fetchActionMovie:`/discover/movie?api_key=${API_KEY}&with_geners=28`,
  fetchComedyMovie:`movie/upcoming?api_key=${API_KEY}&with_geners=35`,
  fetchRomanceMovie:`/movie/popular?api_key=${API_KEY}`,
  fetchHororMovie:`movie/now_playing?api_key=${API_KEY}`,
  fetchDocmentery:`/discover/movie?api_key=${API_KEY}&with_geners=99`, 
}
export default requests