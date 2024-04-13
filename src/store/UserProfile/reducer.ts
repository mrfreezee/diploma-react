import { ProfileStateType, ProfileActionType } from "./type"

const initState: ProfileStateType = {
    name: '',
    email: ''
}

export const userReducer = (state = initState, action: ProfileActionType): ProfileStateType => {
    switch (action.type) {
        case 'SET_USER_NAME':
            return {
                ...state,
                name: action.name!
            }
        case 'SET_USER_EMAIL':
            return {
                ...state,
                email: action.email!
            }
        default:
            return state

    }
}