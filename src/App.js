import React, {useEffect, useState} from 'react';
import Movie from './components/Movie';
import Footer from './components/Footer';

//api keys 
const movie_api_key = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ffac1da63b7872d8587fb0e12d9051b0';
const tv_api_key = 'https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=ffac1da63b7872d8587fb0e12d9051b0';
const search_api_key = 'https://api.themoviedb.org/3/search/movie?&tv?&api_key=ffac1da63b7872d8587fb0e12d9051b0&query=';

function App() {
 const  [movies, setMovies] = useState([]);
 const [searchTerm, setSearchTerm] = useState('');
 useEffect( () => {
   //call api
   async function fetchData() {
    const moviesResponse = await fetch(movie_api_key);
   const moviesJson = await moviesResponse.json();
     setMovies(moviesJson.results)
  }
  fetchData();
  
 }, []);

 //searches movies when typed in search bar
 const searchMovie = async (e) => {
   e.preventDefault();
   //check if there is a search term
   if(searchTerm){
    const moviesResponse = await fetch(search_api_key+searchTerm);
    const moviesJson = await moviesResponse.json();
      setMovies(moviesJson.results);
      setSearchTerm("")
   } else {
     alert('You need to type something')
   }
 }

//check if movie array is empty
 const ifNoMovies = () => {
   if(movies.length == 0){
    alert('there is no movie with that name')
   }
 }

//when typed in search bar get the value
 const handleOnChange =(e) => {
   setSearchTerm(e.target.value)
 }

 const handleOnClick = async (type)  => {
   if(type === 'movie'){
       const moviesResponse = await fetch(movie_api_key);
  const moviesJson = await moviesResponse.json();
    setMovies(moviesJson.results)

   } else if (type === 'tv'){
    const moviesResponse = await fetch(tv_api_key);
    const moviesJson = await moviesResponse.json();
    setMovies(moviesJson.results)
   } else {
     alert('There is no Movies or TV ')
   }
 }
 //test if movies in array
 console.log(movies)

 return (  
  <div>
<header>
    <form onSubmit={searchMovie}>
    <input type="text" placeholder="Search..." className="search" value={searchTerm} onChange={handleOnChange}/>
    </form>
  </header>

 <div className="container">
 <div className="button-click">
    <div>
    <button className="Movies" onClick={() => handleOnClick('movie')}>TV</button>
    </div>

    <div>
    <button className="TV" onClick={() => handleOnClick('tv')}>TV</button>
    </div>
  </div>
<div className ="movie-container">
{movies.map((movie) => (
  <Movie key={movie.id} {...movie}/> 
))}
</div>
<div>
 <Footer />
</div>
 </div>
</div>
 )
}
export default App;
