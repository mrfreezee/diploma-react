import style from './Search.module.scss'


export const Search = () =>{
    return(
        <div className={style.searchWrapper}>
            <input className={style.searchInput} placeholder='Search'></input>
            <div className={style.filtersButton}>
                <span className={style.searchSpan}></span>
                <span className={style.searchSpan}></span>
                <span className={style.searchSpan}></span>
            </div>
        </div>
    )
}