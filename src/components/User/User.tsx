import style from './User.module.scss'
import { UserIcon } from './UserIcon'
import { Arrow } from './Arrow'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../../helpers/AuthContext'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../store/Theme/selectors'
import { UserActions } from './UserActions/UserActions'
import { useState } from 'react'

export const User = () => {

    const {theme} = useSelector(selectTheme)

    const {state} = useAuthContext()
    console.log(state.isLogined)

    const [isUserActionsVisible, setUserActionsVisible] = useState(false);

    const toggleUserActions = () => {
        setUserActionsVisible((prevVisible) => !prevVisible);
    };

    return ( 
        
            <div className={style.userWrapper}>
                <div className={style.userBlock}>
                    <div className={style.userIcon}>
                    {
                            state.isLogined === true ? <div className={style.userInitial}>{state.userName?.slice(0, 1)}</div> : <UserIcon />
                    }
                        
                    </div>
                    <div className={theme === 'dark' ? style.authorizedText : `${style.authorizedText} ${style.authorizedTextLight}`}>
                        {
                            state.isLogined === true ? <div onClick={toggleUserActions}>{state.userName}</div> : <NavLink className={style.linkStyle} to='/signin'>Sign In</NavLink>
                        }
                    </div>
                </div>
                <div className={state.isLogined ? `${style.arrowRotate} ${style.arrow}` : style.arrow}>
                    <Arrow />
                </div>
                {isUserActionsVisible && <UserActions />}
            </div>
    )
}