import { AppThunk } from "../store"
import { AuthErrors } from "./type"




export const signInSuccessAction = (token: string) =>{
    return{
        type: 'AUTH_SUCCESS',
        token: token
    }
}

export const signInFailAction = (errors: AuthErrors) =>{
    return{
        type: 'AUTH_FAILURE',
        errors: errors
    }
}

export const signInAction = (email: string, password: string):AppThunk =>{
    
    return(dispatch, getState) =>{
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
        fetch(request)
        .then(async(res) =>{
            const data = await res.json()
            return[ data, res.status ]
        })
        .then(([data, status]) =>{
            if(status ===  200){
                localStorage.setItem('AUTH_REFRESH_TOKEN', data.refresh)
                dispatch(signInSuccessAction(data.access))
            }
            if(status === 400 || status === 401){
                dispatch(signInFailAction(data))
            }
        })
    }

}

export const refreshTokenAction = ():AppThunk =>{
    return(dispatch) =>{
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
        fetch(request)
        .then(async(res) =>{
            const data = await res.json()
            return[data, res.status]
        })
        .then(([data, status]) =>{
            if(status ===  200){
                dispatch(signInSuccessAction(data.access))
            }
            if(status === 400 || status === 401){
                console.log(data)
                dispatch(signInFailAction(data))
            }
        })
    }
}