import { useAuthContext } from '../../../helpers/AuthContext';
import style from '../User.module.scss'

export const UserActions = () => {

    const { logout } = useAuthContext()

    const handleLogout = () => {
        logout()
    };
    return (
        <div className={style.userActions}>
            <div className={style.editProfile}>
                Edit profile
            </div>
            <div className={style.logOut} onClick={handleLogout}>
                Log Out
            </div>
        </div>
    )
}