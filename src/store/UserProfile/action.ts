import { ProfileActionType } from "./type" 

export const setUserEmail = (email: string): ProfileActionType =>({
    type: 'SET_USER_EMAIL',
    email: email
})

export const setUserName = (name: string): ProfileActionType => ({
    type: 'SET_USER_NAME',
    name: name
})
    
