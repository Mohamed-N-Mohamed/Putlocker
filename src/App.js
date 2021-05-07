import React, {useEffect, useState} from 'react';
import Movie from './components/Movie'




//api keys 
const features_api_key = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ffac1da63b7872d8587fb0e12d9051b0';

const search_api_key = 'https://api.themoviedb.org/3/search/movie?&api_key=ffac1da63b7872d8587fb0e12d9051b0&query=';

const img_api = 'https://image.tmdb.org/t/p/w1280';

function App() {
 const  [movies, setMovies] = useState([]);
 const [searchTerm, setSearchTerm] = useState('');

 useEffect( () => {
   //call api
   async function fetchData() {
    const moviesResponse = await fetch(features_api_key);
   const moviesJson = await moviesResponse.json();
     setMovies(moviesJson.results)
  }

  fetchData();
  

 }, []);

 //searches movies when typed in search bar
 const searchMovie = async (e) => {
   e.preventDefault();
  
   const moviesResponse = await fetch(search_api_key+searchTerm);
   const moviesJson = await moviesResponse.json();
     setMovies(moviesJson.results)

 }


//when typed in search bar get the value
 const handleOnChange =(e) => {
   setSearchTerm(e.target.value)
  

 }


 return (
   

  <div>

<header>
    <form onSubmit={searchMovie}>
    <input type="text" placeholder="Search" className="search" value={searchTerm} onChange={handleOnChange}/>
    </form>
  </header>
  
  <div className ="movie-container">

  {movies.map((movie) => (
    <Movie key={movie.id} {...movie}/> 
  ))}
  
</div>
</div>
 )
}

export default App;
