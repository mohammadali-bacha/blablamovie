import React from "react";
import Movie from "./Movie";

const MovieList = props => {
  const movies = props.movies.map((movie, i) => {
    return (
      <Movie
        key={movie.imdbID}
        title={movie.Title}
        year={movie.Year}
        poster={movie.Poster}
        imdbId={movie.imdbID}
      />
    );
  });

  return <div className="movie-list-container">{movies}</div>;
};

export default MovieList;
