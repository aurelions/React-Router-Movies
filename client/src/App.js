import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Movie from './Movies/Movie'
import MovieList from './Movies/MovieList'

import SavedList from './Movies/SavedList';

import { BrowserRouter as Router } from 'react-router-dom' //React Router import
import { Route, Link, Switch } from 'react-router-dom' //Route Link Switch

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman

        .then(response => { setMovieList(response.data) //Not too sure if this one here is correct?

          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>

      <SavedList list={[ /* This is stretch */]} />

      <Switch>

      <Route path="/movies/:movieID">
        <Movie movieList={movieList}/>
      </Route> 

      <Route path={"/"}>
        <MovieList movieList={movieList}/>
      </Route> 

    </Switch>


    </div>

    

  )
}
