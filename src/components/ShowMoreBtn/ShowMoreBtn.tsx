import style from './ShowMoreBtn.module.scss'
// import { incrementPageAction, loadMoviesAsyncAction } from '../../store/Movies/actions';
import { useDispatch } from 'react-redux';


type Props = {
    onClick: () => void
}

export const ShowMoreBtn = ({onClick}: Props)  =>{
    return(
        <button className={style.showMoreBtn} onClick={onClick}>Show more</button>
    )
}