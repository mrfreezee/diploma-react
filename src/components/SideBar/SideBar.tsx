import style from './SideBar.module.scss'
import { Logo } from "./Logo"
import { HomeIcon } from './SideBarIcons/HomeIcon'
import { FavoritesIcon } from './SideBarIcons/FavoritesIcon'
import { TrendsIcon } from './SideBarIcons/TrendsIcon'
import { SettingsIcon } from './SideBarIcons/SettingsIcon'
import { Link } from 'react-router-dom'

export const SideBar = () => {
    return (
        <div className={style.sideBarWrapper}>
            <Logo />
            <ul className={style.sideBarList}>
                <Link className={style.linkStyle} to={'/'}>
                    <li className={style.sideBarListItem}>
                        <HomeIcon />
                        <span className={style.sideBarSpan}>Home</span>
                    </li>
                </Link>
                <Link className={style.linkStyle} to={'/trends'}>
                <li className={style.sideBarListItem}>
                    <TrendsIcon />
                    <span className={style.sideBarSpan}>Trends</span>
                </li>
                </Link>
                <Link className={style.linkStyle} to={'/favorites'}>
                <li className={style.sideBarListItem}>
                    <FavoritesIcon />
                    <span className={style.sideBarSpan}>Favorites</span>
                </li>
                </Link>
                <Link className={style.linkStyle} to='/settings'>
                    <li className={style.sideBarListItem}>
                        <SettingsIcon />
                        <span className={style.sideBarSpan}>Settings</span>
                    </li>
                </Link>
            </ul>
        </div>
    )
}