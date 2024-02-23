
export type MoviesType = {
  kinopoiskId: number
  imdbId: string
  nameRu: string
  nameEn: string | null
  nameOriginal: string | null
  countries: { country: string }[]
  genres: { genre: string }[]
  ratingKinopoisk: number | null
  ratingImdb: number | null
  year: number
  boxOffice: number
  type: string
  posterUrl: string
  description: string
  filmLength: number
}


export type MoviesState = {
  moviesList: MoviesType[]
  movieData?: MoviesType
  currentPage: number
  limit: number
  moviesCount: number
  boxOffice?: number
}


export type MoviesAction = {
  type: string
  moviesList?: MoviesType[]
  movieData?: MoviesType
  currentPage?: number
  moviesCount?: number
  boxOffice?: number

}

export type SetMovieDataAction = {
  type: 'SET_MOVIE_DATA'
  movieData: MoviesType
}

export type SetMovieBoxOfficeAction = {
  type: 'SET_MOVIE_BOX_OFFICE'
  boxOffice: number
}
