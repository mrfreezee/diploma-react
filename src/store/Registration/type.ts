
export type RegErrors = {
    email?: string
    username?: string
    password?: string
}

export type RegistrationType = {
    username?: string
    email?: string
    password?: string

    isSuccesRegistration: null | boolean
    errors?: RegErrors
}



export type RegistrationAction = {
    type: string
    payload: string | RegErrors
}  