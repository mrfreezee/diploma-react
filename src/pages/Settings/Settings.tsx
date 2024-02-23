import { useSelector } from 'react-redux';
import { TextInput } from '../../components/ComponentsForm/InputsForm/InputText'
import style from './Settings.module.scss'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { selectTheme } from '../../store/Theme/selectors';
import { setDarkThemeAction, setLightThemeAction } from '../../store/Theme/actions';


export const Settings = () => {

    const { theme } = useSelector(selectTheme)
    const dispatch = useDispatch()

    const toggleDarkMode = () => {
        if (theme === 'dark') {
            dispatch(setLightThemeAction())
        } else {
            dispatch(setDarkThemeAction())
        }
    }

    return (
        <div className={theme === 'dark' ? style.settingsWrapper : `${style.settingsWrapper} ${style.settingsWrapperLignt}`}>
            <div className={style.settingsBlocks}>
                <div className={style.settingsProfile}>
                    <div className={style.settingHeader}>Profile</div>
                    <div className={theme === 'dark' ? style.settingsInputsProfile : `${style.settingsInputsProfile} ${style.settingsInputsProfileLignt}`}>
                        <TextInput className={style.customTextInput} type='text' placeholder='Your name' lable='Name' />
                        <TextInput className={style.customTextInput} type='text' placeholder='Your email' lable='Email' />
                    </div>
                </div>
                <div className={style.settingsPassword}>
                    <div className={style.settingHeader}>Password</div>
                    <div className={theme === 'dark' ? style.settingsInputsPassword : `${style.settingsInputsPassword} ${style.settingsInputsPasswordLignt}`}>
                        <TextInput className={style.customPasswordInput} type='password' placeholder='Your password' lable='Password' />
                        <TextInput className={style.customPasswordInput} type='password' placeholder='New password' lable='New password' />
                        <TextInput className={style.customPasswordInput} type='password' placeholder='Confirm password' lable='Confirm password' />
                    </div>
                </div>
                <div className={style.colorMode}>
                    <div className={style.settingHeader}>
                        Color mode
                    </div>
                    <div className={theme === 'dark' ? style.settingColorMode : `${style.settingColorMode} ${style.settingColorModeLight}`}>
                        <div className={style.themeInfo}>
                            <div className={style.themeName}>
                                Dark
                            </div>
                            <div className={style.themeInfoText}>
                                Use dark thema
                            </div>
                        </div>
                        <div className={style.themeButton}>
                            <label className={style.switch}>
                                <input type="checkbox" checked={theme === 'dark'} onChange={toggleDarkMode} />
                                <span className={style.slider}></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}