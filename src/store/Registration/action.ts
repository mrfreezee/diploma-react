import { RegistrationAction } from "./type";
import { AppThunk } from "../store";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { loginFailure, loginSuccess } from "../Auth/actions";
// import { loginFailure, loginSuccess } from "../../helpers/AuthContext";
// import { getUserInfoAction } from "../Auth/actions";

// wiyohog328@massefm.com
// dfsdfsdsdddssda
//  qwertyzxcvb12345

//http://studapi.teachmeskills.by//activate/ODA4OQ/c2tio3-f68700750d477b05fdfd89f2ed6c2c61
export const setEmailAction = (email: string): RegistrationAction => ({
    type: 'SET_REG_EMAIL',
    payload: email
})

export const setUserNameAction = (username: string): RegistrationAction => ({
    type: 'SET_REG_USERNAME',
    payload: username
})

export const setPasswordAction = (password: string): RegistrationAction => ({
    type: 'SET_REG_PASSWORD',
    payload: password
})

export const sendRegDataAction = (): AppThunk => {
    return (dispatch, getState) => {
        const formData = getState().reg


        const request = new Request(`https://studapi.teachmeskills.by/auth/users/`,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,

                })
            }
        )

        fetch(request)
            .then(async (res) => {
                const status = res.status
                return [await res.json(), status]
            })
            
            .then(([res, status]) => {                    
                if (status.toString()[0] === '2') {
                    const userId = res.userId
                    dispatch(loginSuccess(formData.username || '', formData.username || ''));
                    dispatch({
                        type: 'REG_SUCCES',
                        
                    })
                }
                if (status.toString()[0] === '4') {
                    dispatch(loginFailure(res))
                    dispatch({
                        type: 'REG_FAILURE',
                        payload: res
                    })
                }

            })
    }
}