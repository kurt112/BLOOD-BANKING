import * as actions from '../actionType'
import { updateObject } from '../utility/store/updateObject'

const init_state = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    email: '',
    password: ''
}

// change handler in auth
const changeEmail = (state, action) => {
    return updateObject(state, { email: action.event.target.value })
}

const changePassword = (state, action) => {
    
    return updateObject(state, { password: action.event.target.value })
}

// fucntion in auth
const authSuccess = (state, action) => {
    state = updateObject(state, {
        token: action.data.user.refreshToken,
        userId: action.data.user.uid
    })
  
    localStorage.setItem("token", state.token);
    localStorage.setItem("id", state.userId);
    return state
}

const loginStart = (state, action) => {

    action.event.preventDefault();
    return state;
}

const authFail = (state, action) => {
    // alert(action.error)
    console.log(action.error.message)
    return updateObject(state, action.error)
}


const reducer = (state = init_state, action) => {
    switch (action.type) {
        case actions.AUTH_LOGIN: return loginStart(state, action);
        case actions.AUTH_SUCCESS: return authSuccess(state, action);

        case actions.AUTH_FAIL: return authFail(state, action)

        case actions.AUTH_REGISTER: return state

        case actions.AUTH_CHANGE_EMAIL: return changeEmail(state, action);
        case actions.AUTH_CHANGE_PASSWORD: return changePassword(state, action);
        default: return state;
    }
}


export default reducer