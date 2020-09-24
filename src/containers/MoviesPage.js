// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MovieShow';

//MoviesPage is responsible for loading our MoviesList 
//component and passing in the movies we receive from App.
const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    {/** match is inherited from this.props
     * this comes from the routerProps passed in from App
     * Using match we can show stuff depending on what the match.url returns
    */}

    <Route exact path={match.url} render={() => 
      <h3>Choose a movie from the list above</h3>
    } />

    {/* <Route path={`${match.url}/:movieId`} component={MovieShow} movies={movies} /> */}
    <Route path={`${match.url}/:movieId`} render={routerProps => 
      <MovieShow {...routerProps} movies={movies} />
    } />
  </div>
)

export default MoviesPage
