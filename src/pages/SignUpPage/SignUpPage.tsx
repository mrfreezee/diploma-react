import { NavLink } from 'react-router-dom'
import { ButtonForm } from '../../components/ComponentsForm/ButtonForm/ButtonsForm'
import { TextInput } from '../../components/ComponentsForm/InputsForm/InputText'
import { Logo } from '../../components/SideBar/Logo'
import style from '../StylesPages.module.scss'



export const SignUpPage = () => {
    return (
        <div className={style.pageWrapper}>
            <div className={style.backgroundStyle}>
                <NavLink to='/' className={style.logoPage}><Logo/></NavLink>
            <form className={style.pageForm}>
                    <div className={style.namePage}>
                        Sign Up
                    </div>
                    <div className={style.inputsBlock}>
                        <TextInput type='text' placeholder='Your name' lable='Name'/>
                        <TextInput type='text' placeholder='Your email' lable='Email'/>
                        <TextInput type='password' placeholder='Your password' lable='Password'/>
                        <TextInput type='password' placeholder='Confirm password' lable='Confirm password'/>
                    </div>
                    <ButtonForm nameButton='Sign Up'/>
                    <div className={style.haveAccBlock}>
                        Already have an account? <NavLink to='/signin'>Sign In</NavLink>
                    </div>
            </form>
            </div>
        </div>
    )
}