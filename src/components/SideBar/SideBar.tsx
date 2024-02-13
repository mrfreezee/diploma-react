import style from './SideBar.module.scss'
import { Logo } from "./Logo"
import { HomeIcon } from './SideBarIcons/HomeIcon'
import { FavoritesIcon } from './SideBarIcons/FavoritesIcon'
import { TrendsIcon } from './SideBarIcons/TrendsIcon'
import { SettingsIcon } from './SideBarIcons/SettingsIcon'

export const SideBar = () =>{
    return(
        <div className={style.sideBarWrapper}>
        <Logo/>
        <ul className={style.sideBarList}>
            <li>
                <HomeIcon/> 
                <span className={style.sideBarSpan}>Home</span>
            </li>
            <li>
                <TrendsIcon/>
                <span className={style.sideBarSpan}>Trends</span>
            </li>
            <li>
                <FavoritesIcon/>
                <span className={style.sideBarSpan}>Favorites</span>
            </li>
            <li>
                <SettingsIcon/>
                <span className={style.sideBarSpan}>Settings</span>
            </li>
        </ul>
        </div>
    )
}