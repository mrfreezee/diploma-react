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
import { setSignInPasswordAction, signInAction } from '../../store/Auth/actions'
import { useAppDispatch } from '../../helpers/Hooks'

type AuthType = {
    email: string
    password: string
    errors: string
}


export const SignInPage = () => {

    const { theme } = useSelector(selectTheme)

    const dispatch = useAppDispatch()
    // const authState = useAuthState()
    const navigate = useNavigate()
    const signInData = useAuthState()


    const [data, setData] = useState<Partial<AuthType>>({})
    const [errors, setErrors] = useState<Partial<AuthType>>({})

    console.log(data.email, data.password)

    useEffect(() => {
        setErrors({
            email: signInData.errors?.email
                ? signInData.errors.email[0]
                : undefined,
            password: signInData.errors?.password
                ? signInData.errors.password[0]
                : undefined
        })
    }, [signInData.errors])

    useEffect(() => {
        if (signInData.isLogined) {
            navigate('/')
        }
    }, [signInData.isLogined])

    useEffect(() =>{
        if(signInData.isLogined){
            dispatch(setSignInPasswordAction(''))
            dispatch({
                type: 'SET_CLIENT_ERRORS',
                errors: {}
            })
        }
    }, [signInData.isLogined])

    // const signIn = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     if((e.target as HTMLInputElement)?.type !== 'submit'){
    //         return
    //     }
    //     dispatch(signInAction(signInData.email!, signInData.password!))
    // }

    const cleanErrors = () => {
        setErrors({})
    }

    // const inputRef = useRef<HTMLInputElement>(null)

    const signIn = (e: FormEvent<HTMLFormElement>): void => {

        e.preventDefault()
        if ((e.target as HTMLInputElement)?.type !== 'submit') {
            return
        }

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
    

    // useEffect(() => {
    //     if (authState.isLogined) {
    //         // Перенаправление, обновление или что-то еще
    //         navigate('/');
    //     }
    // }, [authState.isLogined])

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
                    <NavLink className={style.linkStyle} to='/resetpassword'>
                        <div className={style.forgotPassword}>
                            Forgot password?
                        </div></NavLink>
                    <ButtonForm nameButton='Sign In'/>
                    <div className={style.haveAccBlock}>
                        <span className={style.spanForm}>Don't have an account?</span> <NavLink className={style.linkStyleSign} to='/signup'>Sign Up</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}