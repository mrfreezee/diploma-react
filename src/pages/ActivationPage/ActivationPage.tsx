import { EventHandler, FormEvent, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import style from '../StylesPages.module.scss'
import styleInput from '../../components/ComponentsForm/InputsForm/InputsStyles.module.scss'
import { ButtonForm } from "../../components/ComponentsForm/ButtonForm/ButtonsForm"
import { Logo } from "../../components/SideBar/Logo"
import { useSelector } from "react-redux"
import { selectTheme } from "../../store/Theme/selectors"
import { TextInput } from "../../components/ComponentsForm/InputsForm/InputText"



export const ActivationPage = () => {

    const { theme } = useSelector(selectTheme)

    const [uid, setUid] = useState('')
    const [token, setToken] = useState('')

    const changeUid = (e: FormEvent<HTMLInputElement>) => {
        setUid(e.currentTarget.value)
    }
    const changeToken = (e: FormEvent<HTMLInputElement>) => {
        setToken(e.currentTarget.value)
    }

    const navigate = useNavigate()

    const activate = () => {
        const request = new Request(`https://studapi.teachmeskills.by/auth/users/activation/`,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    'uid': uid,
                    'token': token
                })
            }
        )
        fetch(request)
            .then(res => {
                alert(res.ok ? 'OK' : 'NOT OK')
                navigate('/')
            })
    }



    return (
        <div className={theme === 'dark' ? style.pageWrapper : `${style.pageWrapper} ${style.pageWrapperLight}`}>
            <div className={style.backgroundStyle}>
                <NavLink to='/' className={style.logoPage}><Logo /></NavLink>
                <form className={theme === 'dark' ? style.pageForm : `${style.pageForm} ${style.pageFormLight}`}>
                    <div className={style.namePage}>
                        Activation Account
                    </div>
                    <div className={style.inputsBlock}>
                        <label>
                            UID <input className={styleInput.textInput} type='text' value={uid} onInput={changeUid} />
                        </label>
                        <label>
                            token <input className={styleInput.textInput} type='text' value={token} onInput={changeToken} />
                        </label>

                        <input type='button' value='Activate User' onClick={activate} />
                    </div>
                    {/* <ButtonForm nameButton='Activate' onClick={activate} /> */}
                </form>
            </div>
        </div>
    )
}