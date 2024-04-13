
// export type AuthErrors = {
//     email?: string[]
//     password?: string[]
//     detail: string
// }

import { ReactNode } from "react"

// export type AuthState = {
//     isAuthorized: boolean
//     accessToken?: string
//     errors?: AuthErrors
// }

// export type AuthAction = {
//     type: string
//     token?: string
//     errors?: AuthErrors
// }
export type AuthErrors = {
    email?: string[]
    password?: string[]
    detail: string
}

export type AuthState = {
    isLogined: boolean
    userName?: string
    initials?: string
    accessToken?: string
    errors?: AuthErrors
    email?: string
}

export type AuthAction =
    | {
        type: 'LOGIN_SUCCESS'
        userName: string
        initials: string
        email: string
    }
    | {
        type: 'LOGIN_FAILURE'
        errors: AuthErrors
    }
    | {
        type: 'LOGOUT'
    }
    | {
        type: 'AUTH_SUCCESS'
        token: string
    }
    | {
        type: 'AUTH_FAILURE'
        errors: AuthErrors
    }
    | {
        type: 'SET_EMAIL'
        email: string
    }
    | {
        type: 'SET_PASSWORD'
        password: string
    }

export type AuthContextType = {
        state: AuthState
        login: (userName: string, initials: string) => void
        logout: () => void
    }

