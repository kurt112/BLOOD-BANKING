import * as actionTypes from '../actionType'

export const hamburgerClicked = () => {
    return {
        type: actionTypes.UI_HAMBURGER_CLICKED
    }
}

export const loginBackClicked = () =>{
    return {
        type:actionTypes.UI_LOGIN_BACK_CLICKED
    }
}

export const registerClicked = () =>{
    return {
        type: actionTypes.UI_REGISTER_CLICKED
    }
}