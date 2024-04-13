import { ReactNode, useContext, useReducer } from "react"
import { AppThunk } from "../store"
import { AuthAction, AuthErrors, AuthState } from "./type"
import { useRegState } from "../Registration/selectors"
import { authInitState, authReducer } from "./reducer"
import { createContext } from "vm"
import { setUserEmail, setUserName } from "../UserProfile/action"

// menotev968@massefm.com
// nfujnmiz
// cxsdiufsdigu432423

export const loginSuccess = (userName: string, email: string): AuthAction => ({
    type: 'LOGIN_SUCCESS',
    userName: userName,
    initials: userName[0].toUpperCase(),
    email: email
})

export const loginFailure = (errors: AuthErrors): AuthAction => ({
    type: 'LOGIN_FAILURE',
    errors,
})

export const logout = (): AuthAction => ({
    type: 'LOGOUT',
})


export const signInSuccessAction = (token: string): AuthAction => {
    return {
        type: 'AUTH_SUCCESS',
        token: token,
    }
}

export const signInFailAction = (errors: AuthErrors) => {
    return {
        type: 'AUTH_FAILURE',
        errors: errors
    }
}

export const setSignInEmailAction = (email: string) =>{
    return{
        type: 'SET_EMAIL',
        email: email
    }
}

export const setSignInPasswordAction = (password: string) =>{
    return{
        type: 'SET_PASSWORD',
        password: password
    }
}

export const signInAction = (email: string, password: string): AppThunk => {
    return async (dispatch, getState) => {
        const data = getState().auth
        const request = new Request('https://studapi.teachmeskills.by/auth/jwt/create/',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    'email': email,
                    'password': password
                })
            })
        await fetch(request)
            .then(async (res) => {
                const data = await res.json()
                return [data, res.status.toString()]

            })
            .then(([data, status]) => {
                if (status.toString()[0] === '2') {
                    localStorage.setItem('AUTH_REFRESH_TOKEN', data.refresh)
                    dispatch(signInSuccessAction(data.access))
                    dispatch(refreshTokenAction())
                    dispatch(getAuthorized())

                }
                if (status.toString()[0] === '4') {
                    dispatch(signInFailAction(data))
                }
            })
    }

}

export const refreshTokenAction = (): AppThunk => {
    return async (dispatch) => {
        const request = new Request('https://studapi.teachmeskills.by/auth/jwt/refresh/',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    'refresh': localStorage.getItem('AUTH_REFRESH_TOKEN')
                })
            })
        await fetch(request)
            .then(async (res) => {
                const data = await res.json()
                return [data, res.status.toString()]
            })
            .then(([data, status]) => {
                if (status.toString()[0] === '2') {
                    dispatch(signInSuccessAction(data.access))
                }
                if (status.toString()[0] === '4') {
                    dispatch(signInFailAction(data))
                }
            })
    }
}

export const getAuthorized = (): AppThunk =>{
    return async (dispatch, getState) =>{
        const token = getState().auth.accessToken
        if(!token){
            console.log('Token is missed')
        }

        const request = new Request(
            'https://studapi.teachmeskills.by/auth/users/me/',
            {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        )

        await fetch(request)
            .then(async (res) =>{
                const data = await res.json()
                return [data, res.status.toString()]
            })
            .then(([data, status]) => {
                if(status.toString()[0] === '2'){
                    dispatch(setUserEmail(data.email))
                    dispatch(setUserName(data.name))
                    dispatch(loginSuccess(data.email, data.name))
                }
            })
    }
}







// export const getUserInfoAction = (userId: number): AppThunk => {
//     return (dispatch) => {
//         const accessToken = localStorage.getItem('AUTH_ACCESS_TOKEN')
//         if (!accessToken) {
//             // Обработка ситуации, когда токен отсутствует
//             return
//         }

//         const request = new Request(`https://studapi.teachmeskills.by/auth/users/${userId}/`, {
//             method: 'GET',
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('AUTH_ACCESS_TOKEN')}`
//             }
//         })

//         fetch(request)
//             .then(async (res) => {
//                 const data = await res.json()
//                 return [data, res.status]
//             })
//             .then(([data, status]) => {
//                 if (status === 200) {
//                     console.log('User Data:', data)
//                     const userName = data.name
//                     console.log('User Name:', userName)
//                 }
//             })
//     }
// }