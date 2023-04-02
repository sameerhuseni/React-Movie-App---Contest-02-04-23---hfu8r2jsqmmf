import React from 'react';
import axios from 'axios';

const MoviesList = ({ movies, setSelectedMovie }) => {
  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id} onClick={() => setSelectedMovie(movie)}>
          <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
};


const MovieDetails = ({ selectedMovie }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${selectedMovie.id}?api_key={API_KEY}`)

export {MoviesList, MovieDetails};
