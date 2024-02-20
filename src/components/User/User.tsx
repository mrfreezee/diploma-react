import style from './User.module.scss'
import { UserIcon } from './UserIcon'
import { Arrow } from './Arrow'
import { NavLink } from 'react-router-dom'

export const User = () => {
    return (
        <NavLink to='/signin'>
            <div className={style.userWrapper}>
                <div className={style.userBlock}>
                    <div className={style.userIcon}>
                        <UserIcon />
                    </div>
                    <div className={style.notAuthorizedText}>
                        Sign In
                    </div>
                </div>
                <div className={style.arrow}>
                    <Arrow />
                </div>
            </div>
        </NavLink>
    )
}