import style from './Header.module.scss'
import { Search } from '../Search/Search'
import { User } from '../User/User'


export const Header = () =>{
    return(
        <header className={style.header}>
            <Search/>
            <User/>
        </header>
    )
}