import style from './Layout.module.scss'
import { Header } from "../Header/Header"
import { MoviesList } from '../MoviesList/MoviesList'
import { ShowMoreBtn } from '../ShowMoreBtn/ShowMoreBtn'
import { MoviePage } from '../../pages/MoviePage/MoviePage'
import { Outlet } from 'react-router-dom'
// import { incrementPageAction } from '../../store/Movies/actions'
import { useDispatch } from 'react-redux'
import { SignInPage } from '../../pages/SignInPage/SignInPage'
import { SignUpPage } from '../../pages/SignUpPage/SignUpPage'


export const Layout = () => {
    
    return (
        <div className={style.layout}>
            <Outlet/>
        </div>
    )
}