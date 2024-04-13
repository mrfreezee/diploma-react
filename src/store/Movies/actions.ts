import { getPageData } from "../../helpers/GetPageData"
import { AppThunk } from "../store"
import { MoviesAction, MoviesType, SetMovieDataAction, SetMovieBoxOfficeAction } from "./types"

export const loadMoviesAction = (moviesList: MoviesType[], currentPage: number, moviesCount: number): MoviesAction => ({
    type: 'LOAD_MOVIES',
    moviesList,
    currentPage,
    moviesCount,
  });

export const setMovieDataAction = (movieData: MoviesType): SetMovieDataAction => ({
    type: 'SET_MOVIE_DATA',
    movieData: movieData
})

export const setMovieBoxOfficeAction = (boxOffice: SetMovieBoxOfficeAction['boxOffice']): SetMovieBoxOfficeAction => ({
  type: 'SET_MOVIE_BOX_OFFICE',
  boxOffice,
});

export const incrementPageAction = (): MoviesAction => ({
    type: 'INCREMENT_PAGE',
})

export const filterByYearAction = (fromYear: number, toYear: number): MoviesAction => ({
  type: 'FILTER_BY_YEAR',
  fromYear,
  toYear,
})


export const loadMoviesAsyncAction = (): AppThunk => {
  return async (dispatch, getState) => {
    const { currentPage, limit } = getState().movies
    const offset = (currentPage - 1) * limit

    try {
      const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=${currentPage}&limit=${limit}&offset=${offset}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': 'c8bf6612-9f17-437e-bff2-428c170dafc9',
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }

      const data = await response.json();
      dispatch(loadMoviesAction(data.items, currentPage, data.count))
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }
}

export const loadMovieDataAsyncAction = (kinopoiskId: number): AppThunk => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${kinopoiskId}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'c8bf6612-9f17-437e-bff2-428c170dafc9',
                    'Content-Type': 'application/json',
                },
            })

            if (!response.ok) {
                throw new Error('Failed to fetch movie data')
            }

            const data = await response.json()
            if (data && data) {
                dispatch(setMovieDataAction(data))
            } else {
                console.error('Invalid movie data format:', data)
            }
        } catch (error) {
            console.error('Error fetching movie data:', error)
        }
    }
}


export const loadMovieBoxOfficeAsyncAction = (kinopoiskId: number): AppThunk => {
  return async (dispatch, getState) => {
    
      try {
          const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${kinopoiskId}/box_office`, {
              method: 'GET',
              headers: {
                  'X-API-KEY': 'c8bf6612-9f17-437e-bff2-428c170dafc9',
                  'Content-Type': 'application/json',
              },
          })

          if (!response.ok) {
              throw new Error('Failed to fetch movie data')
          }

          const data = await response.json()
          console.log('сборы', data)
          if (data) {
              dispatch(setMovieBoxOfficeAction(data))
          } else {
              console.error('Invalid movie data format:', data)
          }
      } catch (error) {
          console.error('Error fetching movie data:', error)
      }
  }
}





// const setPageAction = (page: number): MoviesAction => ({
//     type: 'SET_PAGE',
//     page: page
// })

// const { limit, offset } = getPageData(page)
        // dispatch(setPageAction(page))