import * as actionType from '../../actionType'


export const bloodDonorLoadData = (data) => {
    return {
        type: actionType.BLOOD_DONOR_TABLE_LOAD,
        data
    }
}

export const bloodDonorLoadDataSuccess = (data) => {
    return {
        type: actionType.BLOOD_DONOR_TABLE_LOAD_SUCCESS,
        data
    }
}

export const bloodDonorLoadDataFail = (data) => {
    return {
        type: actionType.BLOOD_DONOR_TABLE_LOAD_FAIL,
        data
    }
}

export const bloodDonorDropdownLoad = (data) => {
    return {
        type: actionType.BLOOD_DONOR_TABLE_LOAD_DROPDOWN,
        data
    }
}

export const bloodDonorDropdownChange = (event) => {
    return{
        type: actionType.BLOOD_DONOR_TABLE_CHANGE_DROPDOWN,
        event
    }
}

export const bloodDonorSetLoading = () => {
    return {
        type:actionType.BLOOD_DONOR_TABLE_LOADING
    }
}