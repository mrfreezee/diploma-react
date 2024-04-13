import style from '../../components/MoviesList/MoviesList.module.scss'
import { useSelector } from "react-redux"
import { selectTheme } from "../../store/Theme/selectors"
import { selectMovies } from "../../store/Movies/selectors"
import { Link } from 'react-router-dom'
import { FavoritesImg } from './FavoritesImage'
import { selectFavorites } from '../../store/Favorites/selectors'
import { MoviesType } from '../../store/Movies/types'

export const FavoritesPage = () => {
    const { theme } = useSelector(selectTheme)
    const { favoriteMovies } = useSelector(selectFavorites);


    return (
        <div className={style.moviesListWrapper}>
            {favoriteMovies.length === 0 ? (
                <div className={style.favoritesImgWrapper}>
                    <FavoritesImg />
                </div>
            ) : (
                <div className={style.moviesList}>
                    {favoriteMovies.map((item) => (
                        <div className={style.movieCard} key={item.kinopoiskId}>
                            <Link to={`/movie/${item.kinopoiskId}`}>
                                <div className={style.movieImgWrapper}>
                                    <div className={style.movieRating}>
                                        {item.ratingKinopoisk !== null ? item.ratingKinopoisk : '🎅'}
                                    </div>
                                    <img className={style.movieImg} src={item.posterUrl} />
                                </div>
                            </Link>
                            <div className={style.textBlock}>
                                <Link to={`/movie/${item.kinopoiskId}`}>
                                    <div className={theme === 'dark' ? style.movieName : `${style.movieName} ${style.movieNameLight}`}>
                                        {item.nameRu}
                                    </div>
                                </Link>
                                <ul className={style.movieGenres}>
                                    {item.genres.slice(0, 2).map((genre, index) => (
                                        <li className={style.genresList} key={index}>
                                            {genre.genre}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className={style.moviesList}>

            </div>
        </div>
    )
}


// {trendingMovies.map((item) => (
//     <div className={style.movieCard} key={item.kinopoiskId}>
//         <Link to={`/movie/${item.kinopoiskId}`}>
//             <div className={style.movieImgWrapper}>
//                 <div className={`${style.movieRating} ${style.movieRatingTrends}`}>
//                     <div className={style.numberWrapper}>{item.ratingKinopoisk}</div>
//                 </div>
//                 <img className={style.movieImg} src={item.posterUrl} />
//             </div>
//         </Link>
//         <div className={style.textBlock}>
//             <Link to={`/movie/${item.kinopoiskId}`}>
//                 <div className={theme === 'dark' ? style.movieName : `${style.movieName} ${style.movieNameLight}`}>
//                     {item.nameRu}
//                 </div>
//             </Link>
//             <ul className={style.movieGenres}>
//                 {item.genres.slice(0, 2).map((genre, index) => (
//                     <li className={style.genresList} key={index}>
//                         {genre.genre}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     </div>
// ))}