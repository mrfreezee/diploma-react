import style from './MoviePage.module.scss'
import style2 from '../../components/MoviesList/MoviesList.module.scss'
import { FavoritesIcon } from '../../components/SideBar/SideBarIcons/FavoritesIcon'
import { ShareIcon } from './ShareIcon'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectMovieBoxOffice, selectMovieData, selectMovies } from '../../store/Movies/selectors';
import { loadMovieBoxOfficeAsyncAction, loadMovieDataAsyncAction } from '../../store/Movies/actions';
import { AppState } from '../../store/store';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { useAppDispatch } from '../../helpers/Hooks';
import { selectFavorites } from '../../store/Favorites/selectors';
import { addToFavorites, removeFromFavorites } from '../../store/Favorites/actions';
import { selectTheme } from '../../store/Theme/selectors';

function getRandomMonthAndDay() {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]
    const randomMonth = months[Math.floor(Math.random() * months.length)]
    const randomDay = Math.floor(Math.random() * 31) + 1

    return { month: randomMonth, day: randomDay }
}

const { month, day } = getRandomMonthAndDay()

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const randomRating = getRandomNumber(5, 8)
const randomMin = getRandomNumber(120, 210)



export const MoviePage = () => {
    const { theme } = useSelector(selectTheme)

    const { id } = useParams()
    const { movieData, moviesList } = useSelector(selectMovies)
    const dispatch = useAppDispatch()
    const { favoriteMovies } = useSelector(selectFavorites)

    const boxOffice = useSelector(selectMovieBoxOffice)



    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        if (id) {
            dispatch(loadMovieDataAsyncAction(Number(id)))
            dispatch(loadMovieBoxOfficeAsyncAction(Number(id)))
        }
    }, [id, dispatch])

    useEffect(() => {
        setIsFavorite(false)
    }, [movieData])

    useEffect(() => {
        if (movieData) {
            const isMovieInFavorites = favoriteMovies.some(
                (favMovie) => favMovie.kinopoiskId === movieData.kinopoiskId
            )
            setIsFavorite(isMovieInFavorites)
        }
    }, [favoriteMovies, movieData])

    const handleAddToFavorites = () => {
        if (movieData) {
            if (isFavorite) {
                dispatch(removeFromFavorites(movieData.kinopoiskId))
            } else {
                dispatch(addToFavorites(movieData))
            }
        }
    }

    return (
        <div className={style.moviePageWrapper}>
            <div className={style.posterWrapper}>
                <img className={style.posterImg} src={movieData?.posterUrl} />
                <div className={style.managementButtonsWrapper}>
                    <button
                        className={isFavorite === false ? style.managementButton : `${style.managementButton} ${style.managementButtonActive}`}
                        onClick={handleAddToFavorites}><FavoritesIcon />
                    </button>
                    <button className={style.managementButton}><ShareIcon /></button>
                </div>
            </div>
            <div className={style.movieInfoAndReccomendationsWrapper}>
                <div key={movieData?.kinopoiskId} className={style.movieInfo}>
                    <ul className={style.genresList}>
                        {movieData?.genres.map((item) => (
                            <li className={style.genresListItem}>{item.genre}</li>
                        ))}
                    </ul>
                    <div className={style.movieName}>
                        {movieData?.nameRu}
                    </div>
                    <div className={style.ratingsAndDuration}>
                        <div className={style.ratingKinopoisk}>
                            {movieData?.ratingKinopoisk !== null ? movieData?.ratingKinopoisk : randomRating}
                        </div>
                        <div className={style.ratingImdb}>
                            <span className={style.spanImbd}>IMBd</span>
                            {movieData?.ratingImdb !== null ? movieData?.ratingImdb : randomRating}
                        </div>
                        <div className={style.duration}>
                            {movieData?.filmLength !== null ? movieData?.filmLength : randomMin}
                            <span>min</span>
                        </div>
                    </div>
                    <div className={style.storyMovie}>
                        {movieData?.description}
                    </div>
                    <div className={style.basicInfoList}>
                        <div className={style.infoListItem}>
                            <div className={style.infoItemName}>Год</div>
                            <div className={style.listItemData}>
                                {movieData?.year}
                            </div>
                        </div>
                        <div className={style.infoListItem}>
                            <div className={style.infoItemName}>Релиз</div>
                            <div className={style.listItemData}>
                                {`${day}  `}
                                {`${month}  `}
                                {movieData?.year}
                            </div>
                        </div>
                        <div className={style.infoListItem}>
                            <div className={style.infoItemName}>Кассовые сборы</div>
                            <div className={style.listItemData}>
                                {boxOffice?.items.slice(-1).map((item) => (
                                    <div>{item.amount} {item.symbol}</div>
                                ))}
                            </div>
                        </div>
                        <div className={style.infoListItem}>
                            <div className={style.infoItemName}>Страна</div>
                            <div className={style.listItemData}>
                                {movieData?.countries.map((item) => (
                                    <div style={{ marginRight: '15px' }}>{item.country}</div>
                                ))}
                            </div>
                        </div>
                        <div className={style.infoListItem}>
                            <div className={style.infoItemName}>Кол-во отзывов</div>
                            <div className={style.listItemData}>
                                {movieData?.reviewsCount}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.recommendationsWrapper}>
                    <header className={style.recommendationsHeader}>Recommendations</header>
                    <div className={style.recommendationsList}>
                        
                            {movieData && moviesList
                            .filter(item => (
                                item.genres.some(genre => movieData.genres.some(currentGenre => currentGenre.genre === genre.genre))
                            ))
                            .filter(item => item.kinopoiskId !== movieData.kinopoiskId)
                            .slice(0, 4)
                            .map((item) => (
                                <div className={style.movieCard} key={item.kinopoiskId}>
                                    <Link to={`/movie/${item.kinopoiskId}`}>
                                        <div className={style2.movieImgWrapper}>
                                            <div className={style2.movieRating}>
                                                {item.ratingKinopoisk !== null ? item.ratingKinopoisk : randomRating}
                                            </div>
                                            <img className={style2.movieImg} src={item.posterUrl} />
                                        </div>
                                    </Link>
                                    <div className={style2.textBlock}>
                                        <Link to={`/movie/${item.kinopoiskId}`}>
                                            <div className={theme === 'dark' ? style2.movieName : `${style2.movieName} ${style2.movieNameLight}`}>
                                                {item.nameRu}
                                            </div>
                                        </Link>
                                        <ul className={style2.movieGenres}>
                                            {item.genres.slice(0, 2).map((genre, index) => (
                                                <li className={style2.genresList} key={index}>
                                                    {genre.genre}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}