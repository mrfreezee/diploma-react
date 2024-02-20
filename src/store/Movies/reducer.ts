import { MoviesType } from "./types"
import { MoviesState, MoviesAction } from "./types"

const initState: MoviesState = {
    moviesList: [] as MoviesType[],
    movieData: undefined,
    currentPage: 1,
    limit: 10,
    moviesCount: 0
}

export const moviesReducer = (state = initState, action: MoviesAction): MoviesState => {
    switch (action.type) {
      case 'LOAD_MOVIES':
        return {
          ...state,
          moviesList: action.currentPage === 1 ? action.moviesList || [] : [...(state.moviesList || []), ...(action.moviesList || [])],
          moviesCount: action.moviesCount || 0,
        };
      case 'SET_MOVIE_DATA':
        return {
          ...state,
          movieData: action.movieData,
        };
      case 'INCREMENT_PAGE':
        return {
          ...state,
          currentPage: state.currentPage + 1,
        };
      default:
        return state;
    }
  };


// case 'INCREMENT_PAGE':
//     return {
//         ...state,
//         page: action.page,
//     };
// case 'SET_PAGE':
//     return {
//         ...state,
//         page: action.page!
//     }