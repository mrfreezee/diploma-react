import style from './MoviePage.module.scss'
import { FavoritesIcon } from '../../components/SideBar/SideBarIcons/FavoritesIcon'
import { ShareIcon } from './ShareIcon'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectMovieBoxOffice, selectMovieData, selectMovies } from '../../store/Movies/selectors';
import { loadMoviesAsyncAction, loadMovieDataAsyncAction } from '../../store/Movies/actions';
import { AppState } from '../../store/store';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';


function getRandomMonthAndNumber() {
    const randomMonthNumber = Math.floor(Math.random() * 12) + 1

    const monthNames = [
        "Январь", "Февраль", "Март",
        "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь",
        "Октябрь", "Ноябрь", "Декабрь"
    ]

    const randomMonth = monthNames[randomMonthNumber - 1]

    const randomNumber = Math.floor(Math.random() * 30) + 1

    return {
        month: randomMonth,
        number: randomNumber
    }
}

const random = getRandomMonthAndNumber()

export const MoviePage = () => {
    const { id } = useParams()
    const { movieData } = useSelector(selectMovies)
    // const { boxOffice } = useSelector(selectMovieBoxOffice)

    const dispatch: ThunkDispatch<AppState, unknown, Action<string>> = useDispatch()

    useEffect(() => {
        if (id) {
            dispatch(loadMovieDataAsyncAction(Number(id)))
        }
    }, [id, dispatch])

    return (
        <div  className={style.moviePageWrapper}>
            <div className={style.posterWrapper}>
                    <img className={style.posterImg} src={movieData?.posterUrl}/>
                <div className={style.managementButtonsWrapper}>
                    <button className={style.managementButton}><FavoritesIcon /></button>
                    <button className={style.managementButton}><ShareIcon /></button>
                </div>
            </div>
            <div className={style.movieInfoAndReccomendationsWrapper}>
                <div key={movieData?.kinopoiskId} className={style.movieInfo}>
                    <ul className={style.genresList}>
                        {movieData?.genres.map((item)=>(
                            <li className={style.genresListItem}>{item.genre}</li>
                        ))}
                    </ul>
                    <div className={style.movieName}>
                        {movieData?.nameRu}
                    </div>
                    <div className={style.ratingsAndDuration}>
                        <div className={style.ratingKinopoisk}>
                            {movieData?.ratingKinopoisk !== null ? movieData?.ratingKinopoisk : '🎅'}
                        </div>
                        <div className={style.ratingImdb}>
                            <span className={style.spanImbd}>IMBd</span>
                            {movieData?.ratingImdb}
                        </div>
                        <div className={style.duration}>
                            {movieData?.filmLength}
                            <span>min</span>
                        </div>
                    </div>
                    <div className={style.storyMovie}>
                        {movieData?.description}
                    </div>
                    <div className={style.basicInfoList}>
                        <div className={style.infoListItem}>
                            Год
                            <div className={style.listItemData}>
                                {movieData?.year}
                            </div>
                        </div>
                        <div className={style.infoListItem}>
                            Релиз 
                            <div className={style.listItemData}>
                                {movieData?.year}
                            </div>
                        </div>
                        <div className={style.infoListItem}>
                            Кассовые сборы
                            <div className={style.listItemData}>
                                {/* {boxOffice?.boxOffice} */}
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}