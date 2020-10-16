import { put, call, select } from 'redux-saga/effects'
import * as actions from '../actions/index'
import fb, { firebase } from '../FirebaseConfig'
import * as Selector from './selectors'
export function* auth_Login(action) {

    const auth = yield select(Selector.auth)
    // alert("wew")
    try {
        const response = yield call(fb.auth.signInWithEmailAndPassword, auth.email, auth.password)

        const profile = yield call(fb.database.read,
            firebase.database().ref('users').orderByChild('uid').equalTo(response.user.uid))
        const profileKey = Object.keys(profile)[0]
        const profileBloodType = profile[profileKey].info.bloodType
        
        const bloodDataResponse = yield call(fb.database.read,
            firebase.database().ref('bloods').orderByChild('type').equalTo(profileBloodType))
        const bloodDataKey = Object.keys(bloodDataResponse)[0] 
        const bloodGive = bloodDataResponse[bloodDataKey].give
        const bloodReceive = bloodDataResponse[bloodDataKey].receive
        yield put(actions.bloodDonorDropdownLoad(bloodGive))
        yield put(actions.bloodReceiverDropdownLoad(bloodReceive))
        yield put(actions.authSuccess(response))
        
    } catch (error) {
        alert("im in fail auth")
        yield put(actions.authFail(error))
    }
}    