import { useSelector } from 'react-redux'
import style from './Search.module.scss'
import { themeReducer } from '../../store/Theme/reducer'
import { selectTheme } from '../../store/Theme/selectors'

type SearchProps = {
    openFilters: () => void
}


export const Search = ({ openFilters }: SearchProps) =>{

    const {theme} = useSelector(selectTheme)

    return(
        <div className={style.searchWrapper}>
            <input className={theme === 'dark' ? style.searchInput : `${style.searchInput} ${style.searchInputLight}`} placeholder='Search'></input>
            <div className={style.filtersButton} onClick={openFilters}>
                <span className={style.searchSpan}></span>
                <span className={style.searchSpan}></span>
                <span className={style.searchSpan}></span>
            </div>
        </div>
    )
}