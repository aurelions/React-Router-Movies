import React from 'react';
import {
  Link,
  useRouteMatch,
  useHistory
} from 'react-router-dom'

export default function MovieList({ movieList }) {

  const { url } = useRouteMatch()

  return (
    <div className="movie-list">
      
      {movieList.map(movie => (

        <MovieDetails key={movie.id} movie={movie} />

      ))}

    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  const { movie } = props;
  const history = useHistory();

  return (
    <div  onClick={(evt) => history.push(`/movies/${movie.id}`)} className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
