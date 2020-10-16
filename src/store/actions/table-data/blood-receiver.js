import * as actionType from '../../actionType'

export const bloodReceiverLoadData = () =>{
    return {
        type: actionType.BLOOD_RECEIVING_TABLE_LOAD
    }
}

export const bloodReceiverLoadDataSuccess = (data) =>{
    return {
        type:actionType.BLOOD_RECEIVING_TABLE_LOAD_SUCCESS,
        data
    }
}

export const bloodReceiverLoadDataFail = () => {
    return {
        type: actionType.BLOOD_RECEIVING_TABLE_LOAD_FAIL
    }
}

export const bloodReceiverDropdownLoad  = (data) =>{
    return {
        type: actionType.BLOOD_RECEIVING_TABLE_LOAD_DROPDOWN,
        data
    }
}

export const bloodReceiverDropdownChange = (event) => {
    return {
        type: actionType.BLOOD_RECEIVING_TABLE_CHANGE_DROPDOWN,
        event
    }
}

export const bloodReceiverSetLoading = () => {
    return {
        type:actionType.BLOOD_RECEIVING_TABLE_LOADING
    }
}