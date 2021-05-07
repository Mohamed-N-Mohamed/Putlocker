import React from 'react';
//api key
const img_api = 'https://image.tmdb.org/t/p/w1280';

//movies - title, poster_path, overview, vote_average

const Movie = ({title, poster_path, overview, vote_average}) => (
  <div className="movie">
    <img src={img_api  + poster_path} alt={title}/>
    <div className="movie-info">
     <h3>{title}</h3>
     <span>{vote_average}</span> 
    </div>

    
    <div className="movie-overview">
      <h2>Movie Info</h2>
      <p>{overview}</p>

    </div>


    <div className="hd">
        HD

    </div>



    

  </div>
)



export default  Movie;