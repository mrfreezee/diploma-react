import { NavLink, useNavigate } from 'react-router-dom'
import { ButtonForm } from '../../components/ComponentsForm/ButtonForm/ButtonsForm'
import { TextInput } from '../../components/ComponentsForm/InputsForm/InputText'
import { Logo } from '../../components/SideBar/Logo'
import style from '../StylesPages.module.scss'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../store/Theme/selectors'
import { useRegState } from '../../store/Registration/selectors'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { useEffect } from 'react'
import { sendRegDataAction, setEmailAction, setPasswordAction, setUserNameAction } from '../../store/Registration/action'



export const SignUpPage = () => {
    const { theme } = useSelector(selectTheme)

    const formData = useRegState()
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    useEffect(() => {
        if (formData.isSuccesRegistration !== null) {
            if (formData.isSuccesRegistration === true) {
                navigate('/activate')
            } else {
                console.log('Registration failed:', JSON.stringify(formData.errors))
            }
        }
    }, [formData.isSuccesRegistration, formData.errors]) 

    const sendRegData = () => {
        dispatch(sendRegDataAction());
    }

    return (
        <div className={theme === 'dark' ? style.pageWrapper : `${style.pageWrapper} ${style.pageWrapperLight}`}>
            <div className={style.backgroundStyle}>
                <NavLink to='/' className={style.logoPage}><Logo /></NavLink>
                <form onSubmit={() => {sendRegData()}} className={theme === 'dark' ? style.pageForm : `${style.pageForm} ${style.pageFormLight}`}
                    >
                    <div className={style.namePage}>
                        Sign Up
                    </div>
                    <div className={style.error}>
                        {
                            formData.isSuccesRegistration === false && (JSON.stringify(formData.errors))
                        }
                    </div>
                    <div className={style.inputsBlock}>
                        <TextInput
                            type='text'
                            placeholder='Your name'
                            lable='Name' 
                            value={formData.username}
                            onChange={(text: string) => { dispatch(setUserNameAction(text)) }} />
                        <TextInput
                            type='text'
                            placeholder='Your email'
                            lable='Email' 
                            value={formData.email}
                            onChange={(text: string) => { dispatch(setEmailAction(text)) }}
                            />
                        <TextInput
                            type='password'
                            placeholder='Your password'
                            lable='Password'
                            value={formData.password}
                            onChange={(text: string) => { dispatch(setPasswordAction(text)) }}
                            />
                        <TextInput
                            type='password'
                            placeholder='Confirm password'
                            lable='Confirm password'
                            />
                    </div>
                    <ButtonForm nameButton='Sign Up' />
                    <div className={style.haveAccBlock}>
                        Already have an account? <NavLink to='/signin'>Sign In</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}