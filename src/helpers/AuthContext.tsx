import { ReactNode, createContext, useContext, useEffect, useReducer } from "react"
import { useRegState } from "../store/Registration/selectors"
import { AuthErrors, AuthState } from "../store/Auth/type";
import { authReducer } from "../store/Auth/reducer";


type AuthContextType = {
    state: AuthState
    login: (userName: string, initials: string) => void
    logout: () => void
}

type ProviderProps = {
    children: ReactNode
}

const authInitState: AuthState = {
    isLogined: false,
}


export const AuthContext = createContext<AuthContextType>({} as AuthContextType)



export const AuthContextProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, authInitState)
    const formData = useRegState()

    // useEffect(() => {
    //     const savedAuthState = localStorage.getItem('authState');
    //     if (savedAuthState) {
    //         dispatch({
    //             type: 'LOGIN_SUCCESS',
    //             userName: savedAuthState.userName,
    //             initials: savedAuthState.userName,
    //         })
    //     }
    // }, [])

    const login = () => dispatch({
        type: 'LOGIN_SUCCESS',
        userName: formData.username || '',
        initials: formData.username || '',
        email: formData.email || ''
        
        
    })

    const logout = () => dispatch({
        type: 'LOGOUT'
    })

    const value: AuthContextType = {
        state,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuthContext = () => {
    return useContext(AuthContext)
}