import style from './MoviePage.module.scss'

export const ShareIcon = () => {
    return (
        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className={style.shareIcon} cx="7.54545" cy="11.6363" r="2.54545" stroke="#80858B" strokeWidth="2" />
            <circle className={style.shareIcon} cx="16.4544" cy="6.54545" r="2.54545" stroke="#80858B" strokeWidth="2" />
            <circle className={style.shareIcon} cx="16.4544" cy="16.7273" r="2.54545" stroke="#80858B" strokeWidth="2" />
            <path className={style.shareIcon}  d="M14 16L10.0911 13.5455M10.0911 10.5L14 8" stroke="#80858B" strokeWidth="2" strokeLinecap="round" fill='#80858B' />
        </svg>
    )
}
