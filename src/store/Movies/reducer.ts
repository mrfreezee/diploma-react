import { MoviesType } from "./types"
import { MoviesState, MoviesAction } from "./types"

const initState: MoviesState = {
  moviesList: [] as MoviesType[],
  movieData: undefined,
  currentPage: 1,
  limit: 10,
  moviesCount: 0
}

export const sortByYearAction = (): MoviesAction => ({
  type: 'SORT_BY_YEAR',
})

export const sortByRatingAction = (): MoviesAction => ({
  type: 'SORT_BY_RATING',
})

export const moviesReducer = (state = initState, action: MoviesAction): MoviesState => {
  switch (action.type) {
    case 'LOAD_MOVIES':
      return {
        ...state,
        moviesList: action.currentPage === 1 ? action.moviesList || [] : [...(state.moviesList || []), ...(action.moviesList || [])],
      }
    case 'SET_MOVIE_DATA':
      return {
        ...state,
        movieData: action.movieData
      }
    case 'SET_MOVIE_BOX_OFFICE':
      return {
        ...state,
        boxOffice: action.boxOffice
      }
    case 'INCREMENT_PAGE':
      return {
        ...state,
        currentPage: state.currentPage + 1
      }
    case 'SORT_BY_YEAR':
      return {
        ...state,
        moviesList: [...state.moviesList].sort((a, b) => b.year - a.year),
      }
    case 'SORT_BY_RATING':
      return {
        ...state,
        moviesList: [...state.moviesList].sort((a, b) => (b.ratingKinopoisk || 0) - (a.ratingKinopoisk || 0)),
      }
      case 'FILTER_BY_YEAR':
        const filteredMovies = state.moviesList.filter(movie => {
          const movieYear = movie.year
          const fromYear = action.fromYear
          const toYear = action.toYear
          
          if (fromYear !== undefined && toYear !== undefined) {
            return movieYear >= fromYear && movieYear <= toYear;
          }
          return true
        })
      return {
        ...state,
        moviesList: filteredMovies,
      }
    default:
      return state
  }
}


