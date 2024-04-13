import { useSelector } from 'react-redux';
import style from './ShowMoreBtn.module.scss'
// import { incrementPageAction, loadMoviesAsyncAction } from '../../store/Movies/actions';
import { useDispatch } from 'react-redux';
import { selectTheme } from '../../store/Theme/selectors';


type Props = {
    onClick: () => void
}

export const ShowMoreBtn = ({onClick}: Props)  =>{

    const {theme} = useSelector(selectTheme)
    return(
        <button className={theme === 'dark' ? style.showMoreBtn : `${style.showMoreBtn} ${style.showMoreBtnLight}`} onClick={onClick}>Show more</button>
    )
}