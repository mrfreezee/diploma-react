import style from './Main.module.scss'
import { Header } from "../Header/Header"


export const Main = () => {
    return (
        <div className={style.main}>
            <Header />
        </div>
    )
}