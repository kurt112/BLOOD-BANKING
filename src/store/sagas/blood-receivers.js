import { put, call } from 'redux-saga/effects'
import * as actions from '../actions/index'
import fb, { firebase } from '../FirebaseConfig'

export function* BloodReceiverLoadData(action) {
    try {
        const data = yield call(fb.database.read,
            firebase.database().ref('users').orderByChild('info/action').equalTo('Receiver').limitToFirst(20))
        yield put(actions.bloodReceiverLoadDataSuccess(data))
    } catch (error) {
        console.log(error);
    }
}

export function* BloodReceiverChangeDataByDropDown(action) {
    
    const bloodType = action.event.target.value;
    yield put(actions.bloodReceiverSetLoading())
    try {
        console.log("im in dropdown")
        const data = yield call(fb.database.read, firebase.database().ref('users').orderByChild("info/bloodType").equalTo(bloodType))
        console.log(data)
        yield put(actions.bloodReceiverLoadDataSuccess(data))
    } catch (error) {
        console.log(error)
    }
}
