import { RegistrationType, RegistrationAction, RegErrors } from "./type";


const initState: RegistrationType = {
    isSuccesRegistration: null,
}

export const regReducer = (state = initState, action: RegistrationAction): RegistrationType => {

    switch (action.type) {
        case 'SET_REG_EMAIL':
            return {
                ...state,
                email: action.payload as string
            } 
        case 'SET_REG_USERNAME':
            return {
                
                ...state,
                username: action.payload as string
            }
        case 'SET_REG_PASSWORD':
            return {
                ...state,
                password: action.payload as string
            }
        case 'REG_SUCCES':
            return{
                ...state,
                isSuccesRegistration: true
            }
        case 'REG_FAILURE':
            return{
                ...state,
                isSuccesRegistration: false,
                errors: action.payload as RegErrors

            }
        default:
            return state
    }
}