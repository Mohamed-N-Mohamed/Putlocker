import React from 'react';
//api key
const img_api = 'https://image.tmdb.org/t/p/w1280';
//movies - title, poster_path, overview, vote_average
const Movie = ({title, poster_path, overview, vote_average, name}) => (
  <div className="movie">
    <img src={img_api  + poster_path} alt={title}/>
    <div className="movie-info">
     <h3>{title ? title : name}</h3>
     <span className={`tag ${setVoteColor(vote_average)}`}>{vote_average}</span> 
    </div>
    <div className="movie-overview">
      <h2>Information</h2>
      <p>{overview}</p>
    </div>
    <div className="hd">
        HD
    </div>
  </div>
)
//makes the vote color green, yellow or red
const setVoteColor = (vote) => {
  if(vote >=7 ){
    return 'green'
  } else if (vote = 5){
    return 'yellow'
  } else {
    return 'red'
  }
}
export default  Movie;