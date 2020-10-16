import * as actionType from '../actionType'


export const authLogin = (event) =>{
    return {
        type: actionType.AUTH_LOGIN,
        event
    }
}

export const authFail = (error) => {
    return {
        type: actionType.AUTH_FAIL,
        error
    }
}

export const authSuccess =(data) => {
    return {
        type: actionType.AUTH_SUCCESS,
        data
    }
}

export const authRegister = (data) =>{
    return {
        type: actionType.AUTH_REGISTER,
        data
    }
}

export const authChangeEmail = (event) =>{
    return {
        type:actionType.AUTH_CHANGE_EMAIL,
        event
    }
}

export const authChangePassword = (event) => {
    return {
        type: actionType.AUTH_CHANGE_PASSWORD,
        event
    }
}

