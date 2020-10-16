import { takeLeading } from 'redux-saga/effects'
import * as actions from '../actionType'
import {
    auth_Login
} from './auth'

import {
    get_profile,
    register_profile
} from './profile'

import {
    BloodDonorChangeDataByDropDown,
    BloodDonorLoadData
}from './blood-donors'

import {
    BloodReceiverLoadData,
    BloodReceiverChangeDataByDropDown
} from './blood-receivers'




// for authentication
export function* watchAuthLogin () {
   
    yield takeLeading(actions.AUTH_LOGIN, auth_Login)
}

// for blood receiver table data 

export function* wathcBloodRecieverTableData () {
    yield takeLeading(actions.BLOOD_RECEIVING_TABLE_LOAD, BloodReceiverLoadData)
}

export function* watchBloodReceiverDrowpDownChange() {
    yield takeLeading(actions.BLOOD_RECEIVING_TABLE_CHANGE_DROPDOWN,BloodReceiverChangeDataByDropDown)
}

// for blood donation table data 

export function* watchBloodDonorTableData() {
    yield takeLeading(actions.BLOOD_DONOR_TABLE_LOAD,BloodDonorLoadData)
}

export function* watchBloodDonorDrowpDownChange(){
    yield takeLeading(actions.BLOOD_DONOR_TABLE_CHANGE_DROPDOWN,BloodDonorChangeDataByDropDown)
}

// for users profile
export function* watchProfile(){
    yield takeLeading(actions.PROFILE_CLICKED,get_profile)
}

export function* watchRegisterProfile() {
    yield takeLeading(actions.PROFILE_SIGN_UP,register_profile)
}