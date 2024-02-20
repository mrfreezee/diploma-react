import { Link, NavLink } from 'react-router-dom'
import { ButtonForm } from '../../components/ComponentsForm/ButtonForm/ButtonsForm'
import { TextInput } from '../../components/ComponentsForm/InputsForm/InputText'
import style from '../StylesPages.module.scss'
import { Logo } from '../../components/SideBar/Logo'



export const ResetPasswordPage = () => {
    return (
        <div className={style.pageWrapper}>
            <div className={style.backgroundStyle}>
                <NavLink to='/' className={style.logoPage}><Logo/></NavLink>
                <form className={style.pageForm}>
                    <div className={style.namePage}>
                        Reset Password
                    </div>
                    <div className={style.inputsBlock}>
                        <TextInput type='text' placeholder='Your email' lable='Email' />
                    </div>
                    <ButtonForm nameButton='Reset' />
                </form>
            </div>
        </div>
    )
}