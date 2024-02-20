import style from './MoviesList.module.scss'
import { useSelector } from 'react-redux'
import { useEffect } from "react"
import { selectMovies } from '../../store/Movies/selectors'
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store/store"
import { Link } from 'react-router-dom';
import { loadMoviesAsyncAction } from '../../store/Movies/actions'
import { ShowMoreBtn } from '../ShowMoreBtn/ShowMoreBtn'
import { incrementPageAction } from '../../store/Movies/actions'



export const MoviesList = () => {
    const { moviesList, currentPage } = useSelector(selectMovies)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(loadMoviesAsyncAction())
    }, [currentPage])

    const handleShowMore = () => {
        dispatch(incrementPageAction())
        dispatch(loadMoviesAsyncAction())
    }




    return (
        <div className={style.moviesListWrapper}>
            {moviesList.map((item) => (
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
                        <div className={style.movieName}>
                            {item.nameRu}
                        </div>
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
            <button className={style.showMoreBtn} onClick={handleShowMore}>
                Show more
            </button>
        </div>
    )
}
