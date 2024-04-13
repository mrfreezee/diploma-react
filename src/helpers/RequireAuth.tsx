import { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { useAuthState } from "../store/Auth/selectors"

type Props = {
    children: ReactNode
}

export const RequierAuth = ({children}: Props) =>{

    const {isLogined} = useAuthState()

    if(!isLogined){
 
        //перенаправление 

        return (
            <Navigate to='/signin'/>
        )
    }

    return(
        <>
        {children}
        </>
    )
}
