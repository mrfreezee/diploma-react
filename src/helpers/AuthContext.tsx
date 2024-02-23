import { ReactNode, createContext, useContext, useReducer } from "react"

type AuthState = {
    isLogined: boolean
    userName?: string
    initials?: string
}

type AuthAction = {
    type: string  //... должен быть всегда 
    userName?: string
    initials?: string
    //... кастомные ключи
}

type AuthContextType = {
    state: AuthState
    login: (userName: string, initials: string) => void
    logout: () => void
}

type ProviderProps = {
    children: ReactNode
}

const authInitState: AuthState = {
    isLogined: false
}


export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const authReducer = (state: AuthState, action: AuthAction): AuthState =>{
    switch(action.type){
        case 'login':
            return{
                isLogined: true,
                userName: action.userName,
                initials: action.initials

            }
        case 'logout':
            return{
                isLogined: false
            }
        default:
            return state

    }
}

export const AuthContextProvider = ({children}: ProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, authInitState)

    
    const login = () => dispatch({
        type: 'login',
        userName: `${prompt('Введите имя')}`,
        initials: 'NM'
    })

    const logout = () => dispatch({
        type: 'logout'
    })

    const value = {
        state: state,
        login: login,
        logout: logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () =>{
    return useContext(AuthContext)
}