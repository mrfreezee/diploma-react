import { AuthState, AuthAction } from "./type";


export const authInitState: AuthState = {
    isLogined: false,
}

export const authReducer = (state = authInitState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                isLogined: true,
                userName: action.userName,
                initials: action.initials,
                errors: undefined
            }

        case 'LOGIN_FAILURE':
            return {
                ...state,
                isLogined: false,
                userName: undefined,
                initials: undefined,
                errors: action.errors
            }

        case 'LOGOUT':
            return {
                isLogined: false,
                userName: undefined,
                initials: undefined,
                errors: undefined
            }

        case 'AUTH_SUCCESS':
            return {
                ...state,
                accessToken: action.token,
            }

        case 'AUTH_FAILURE':
            return {
                ...state,
                isLogined: false,
                errors: action.errors
            }
        case 'SET_EMAIL':
            return{
                ...state,
                email: action.email
            }
        case 'SET_PASSWORD':
            return{
                ...state,
                // password: action.password
            }

        default:
            return state
    }
}

// const initState: AuthState = {
//     isAuthorized: false
// }

// export const authReducer = (state = initState, action: AuthAction): AuthState =>{
//     switch(action.type){
//         case 'AUTH_SUCCESS':
//             return {
//                 isAuthorized: true, 
//                 accessToken: action.token,
//             }
//         case 'AUTH_FAILURE':
//             return {
//                 isAuthorized: false,
//                 errors: action.errors
//             }
//         default:
//             return state
//     }
// }