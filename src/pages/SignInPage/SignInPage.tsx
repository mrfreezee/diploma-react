import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ButtonForm } from '../../components/ComponentsForm/ButtonForm/ButtonsForm'
import { TextInput } from '../../components/ComponentsForm/InputsForm/InputText'
import style from '../StylesPages.module.scss'
import { Logo } from '../../components/SideBar/Logo'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../store/Theme/selectors'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { useAuthState } from '../../store/Auth/selectors'
import { FormEvent, useEffect, useState } from 'react'
import { signInAction } from '../../store/Auth/actions'
import { useAppDispatch } from '../../helpers/Hooks'

type AuthType = {
    email: string
    password: string
    errors: string
}


export const SignInPage = () => {

    const { theme } = useSelector(selectTheme)

    const dispatch = useAppDispatch()
    const authState = useAuthState()
    const navigate = useNavigate()


    const [data, setData] = useState<Partial<AuthType>>({})
    const [errors, setErrors] = useState<Partial<AuthType>>({})


    useEffect(() => {
        setErrors({
            email: authState.errors?.email
                ? authState.errors.email[0]
                : undefined,
            password: authState.errors?.password
                ? authState.errors.password[0]
                : undefined
        })
    }, [authState.errors])

    useEffect(() => {
        if (authState.isAuthorized) {
            navigate('/')
        }
    }, [authState.isAuthorized])

    const cleanErrors = () => {
        setErrors({})
    }

    // const inputRef = useRef<HTMLInputElement>(null)

    const signIn = (e: FormEvent<HTMLFormElement>): void => {
// 
        e.preventDefault()
        if ((e.target as HTMLInputElement)?.type !== 'submit') {
            return
        }
        //     const email = 'MrFreeze1'
        // const password = '12345qwertYP'

        if (!data.email || !data.password) {
            setErrors({
                ...errors,
                email: data.email ? undefined : 'Заполните Email',
                password: data.password ? undefined : 'Заполните Password'
            })
            return
        }

        if (data.email && data.password) {
            dispatch(signInAction(data.email, data.password))
        }
    }

    const handleEmail = (email: string) => {
        setData({
            ...data,
            email: email
        })
        cleanErrors()
    }

    const handlePassword = (password: string) => {
        setData({
            ...data,
            password: password
        })
        cleanErrors()
    }
    

    return (
        <div className={theme === 'dark' ? style.pageWrapper : `${style.pageWrapper} ${style.pageWrapperLight}`}>
            <div className={style.backgroundStyle}>
                <NavLink to='/' className={style.logoPage}><Logo /></NavLink>
                <form  onClick={signIn} className={theme === 'dark' ? style.pageForm : `${style.pageForm} ${style.pageFormLight}`}>
                    <div className={style.namePage}>
                        Sign In
                    </div>
                    <div className={style.inputsBlock}>
                        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                        <TextInput onChange={handleEmail} type='text' placeholder='Your email' lable='Email' />
                        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                        <TextInput onChange={handlePassword}  type='password' placeholder='Your password' lable='Password' />
                    </div>
                    <NavLink to='/resetpassword'>
                        <div className={style.forgotPassword}>
                            Forgot password?
                        </div></NavLink>
                        {/* <input type='submit' value='Sign in'></input> */}
                    <ButtonForm nameButton='Sign In'/>
                    <div className={style.haveAccBlock}>
                        Don't have an account? <NavLink to='/signup'>Sign Up</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}