import { useSelector } from 'react-redux'
import style from '../../components/MoviesList/MoviesList.module.scss'
import { selectMovies } from '../../store/Movies/selectors'
import { selectTheme } from '../../store/Theme/selectors'
import { Link } from 'react-router-dom'
import { TrendsIcon } from './TrendsIcon'



export const Trends = () => {
    const { moviesList } = useSelector(selectMovies)
    const { theme } = useSelector(selectTheme)

    const trendingMovies = moviesList.filter((item) => item.ratingKinopoisk !== null && item.ratingKinopoisk > 8)

    return (
        <div className={style.moviesListWrapper}>
            <div className={style.moviesList}>
                {trendingMovies.map((item) => (
                    <div className={style.movieCard} key={item.kinopoiskId}>
                        <Link to={`/movie/${item.kinopoiskId}`}>
                            <div className={style.movieImgWrapper}>
                                <div className={`${style.movieRating} ${style.movieRatingTrends}`}>
                                    <TrendsIcon />
                                    <div className={style.numberWrapper}>{item.ratingKinopoisk}</div>
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
        </div>
    )
}