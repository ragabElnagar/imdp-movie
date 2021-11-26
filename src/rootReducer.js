import {combineReducers}from "redux"
import {searchReducer} from "./store/reducer/searchReducer"
import {movieInfoReducer} from "./store/reducer/movieInfoReducer"
import { mostPopularReducer } from "./store/reducer/mostPopularReducer"
import { highestInTheatersReducer } from "./store/reducer/moviesInTheatresReducer"
import { hiestRatedReducer } from "./store/reducer/highestRatedReducer"
import { popularkidsMoviesReducer } from "./store/reducer/kidsMoviesReducer"
import { bestMoviesFromReducer } from "./store/reducer/bestMoviesFromReducer"
import { bestDramaThisYearReducer } from "./store/reducer/bestDramaThisYearReducer"
import { tomCruiseMoviesReducer } from "./store/reducer/tomCruiseMoviesReducer"
import { hiestComidiesReducer } from "./store/reducer/highestComidiesReducer"


  const rootReducer=combineReducers({
    searchMovies: searchReducer,
    movieInfo: movieInfoReducer,
    mostPopular:mostPopularReducer,
    highestInTheaters:highestInTheatersReducer,
    hiestRated:hiestRatedReducer,
    popularkidsMovies:popularkidsMoviesReducer,
    bestMoviesFrom:bestMoviesFromReducer,
    bestDramaThisYear:bestDramaThisYearReducer,
    tomCruiseMovies:tomCruiseMoviesReducer,
    hiestComidies:hiestComidiesReducer
    })
export default rootReducer