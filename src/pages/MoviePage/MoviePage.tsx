import style from './MoviePage.module.scss'
import { FavoritesIcon } from '../../components/SideBar/SideBarIcons/FavoritesIcon'
import { ShareIcon } from './ShareIcon'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectMovieData, selectMovies } from '../../store/Movies/selectors';
import { loadMoviesAsyncAction, loadMovieDataAsyncAction } from '../../store/Movies/actions';
import { AppState } from '../../store/store';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';


function generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const MoviePage = () => {
    const { id } = useParams();
    const { movieData } = useSelector(selectMovies);

    const dispatch: ThunkDispatch<AppState, unknown, Action<string>> = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(loadMovieDataAsyncAction(Number(id)));
        }
    }, [id, dispatch]);

    return (
        <div className={style.moviePageWrapper}>
            <div className={style.posterWrapper}>
                    <img className={style.posterImg} src={movieData?.posterUrl}/>
                <div className={style.managementButtonsWrapper}>
                    <button className={style.managementButton}><FavoritesIcon /></button>
                    <button className={style.managementButton}><ShareIcon /></button>
                </div>
            </div>
            <div className={style.movieInfoAndReccomendationsWrapper}>
                <div className={style.movieInfo}>
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
                            {generateRandomNumber(120, 230)}
                            <span>min</span>
                        </div>
                    </div>
                    <div className={style.storyMovie}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex soluta recusandae fuga error amet architecto ducimus, rem a hic minima expedita harum voluptatem reprehenderit voluptatum quae tempore magni impedit ipsam sequi? Dolorem esse minima tempora voluptate. Aliquam magnam magni doloremque tempora adipisci. Nisi laborum aspernatur, tempora id a commodi.
                    </div>
                    <div className={style.basicInfo}>

                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}