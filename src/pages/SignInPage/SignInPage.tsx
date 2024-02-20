import { Link, NavLink } from 'react-router-dom'
import { ButtonForm } from '../../components/ComponentsForm/ButtonForm/ButtonsForm'
import { TextInput } from '../../components/ComponentsForm/InputsForm/InputText'
import style from '../StylesPages.module.scss'
import { Logo } from '../../components/SideBar/Logo'



export const SignInPage = () => {
    return (
        <div className={style.pageWrapper}>
            <div className={style.backgroundStyle}>
                <NavLink to='/' className={style.logoPage}><Logo /></NavLink>
                <form className={style.pageForm}>
                    <div className={style.namePage}>
                        Sign In
                    </div>
                    <div className={style.inputsBlock}>
                        <TextInput type='text' placeholder='Your email' lable='Email' />
                        <TextInput type='password' placeholder='Your password' lable='Password' />
                    </div>
                    <NavLink to='/resetpassword'>
                        <div className={style.forgotPassword}>
                            Forgot password?
                        </div></NavLink>
                    <ButtonForm nameButton='Sign In' />
                    <div className={style.haveAccBlock}>
                        Don't have an account? <NavLink to='/signup'>Sign Up</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}