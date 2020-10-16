import * as actionType from '../actionType'
import {updateObject} from '../utility/store/updateObject'
const init_state = {
    sideBarShow: false,
    showRegister: false
}

const hideRegister = (state) =>{
    
    return updateObject(state, { showRegister:false})
}

const showRegister = (state) => {
    
    return updateObject(state, {showRegister:true})
}



const reducer = (state = init_state, action) => {
    switch (action.type) {
        case actionType.UI_HAMBURGER_CLICKED: 
        // alert(init_state.sum);
        return updateObject(state, {sideBarShow: !state.sideBarShow})
          
        case actionType.UI_LOGIN_BACK_CLICKED:
            return hideRegister(state);
        
        case actionType.UI_REGISTER_CLICKED:
            return showRegister(state);
        
        default:
            return state

    }
}

export default reducer

