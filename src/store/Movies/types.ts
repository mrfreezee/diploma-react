
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
    type: string
    posterUrl: string
}

// export type MoviesState = {
//     moviesList: MoviesType[]
//     movieData?: MoviesType
// }
export type MoviesState = {
    moviesList: MoviesType[];
    movieData?: MoviesType;
    currentPage: number;
    limit: number;
    moviesCount: number
  };
// export type MoviesAction = {
//     type: string
//     moviesList?: MoviesType[]
//     movieData?: MoviesType
// }

export type MoviesAction = {
    type: string;
    moviesList?: MoviesType[];
    movieData?: MoviesType;
    currentPage?: number;
    moviesCount?: number;
  };

export type SetMovieDataAction = {
    type: 'SET_MOVIE_DATA'
    movieData: MoviesType
}

