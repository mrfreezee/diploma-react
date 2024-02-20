import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Layout } from '../Layout/Layout'
import { MoviesList } from '../MoviesList/MoviesList'
import style from './Main.module.scss'

export const Main = () => {
    return (
        <div className={style.main}>
            <Header/>
            <Outlet/>
        </div>
    )
}