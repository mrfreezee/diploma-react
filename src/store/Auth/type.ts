
export type AuthErrors = {
    email?: string[]
    password?: string[]
    detail: string
}

export type AuthState = {
    isAuthorized: boolean
    accessToken?: string
    errors?: AuthErrors
}

export type AuthAction = {
    type: string
    token?: string
    errors?: AuthErrors
}
