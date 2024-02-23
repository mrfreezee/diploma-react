import { AuthState, AuthAction } from "./type";

const initState: AuthState = {
    isAuthorized: false
}

export const authReducer = (state = initState, action: AuthAction): AuthState =>{
    switch(action.type){
        case 'AUTH_SUCCESS':
            return {
                isAuthorized: true, 
                accessToken: action.token
            }
        case 'AUTH_FAILURE':
            return {
                isAuthorized: false,
                errors: action.errors
            }
        default:
            return state
    }
}