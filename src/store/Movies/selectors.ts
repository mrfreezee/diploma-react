import { AppState } from "../store";

export const selectMovies = (globalState: AppState) => globalState.movies

export const selectMovieData = (globalState: AppState) => globalState.movies.movieData
