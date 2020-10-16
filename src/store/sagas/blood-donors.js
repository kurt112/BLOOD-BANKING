import { put, call} from 'redux-saga/effects'
import * as actions from '../actions/index'
import fb, {firebase} from '../FirebaseConfig'
export function* BloodDonorLoadData(action) {
    const bloodType = action.data
    try {
        const data = yield call(fb.database.read, firebase.database().ref('users').orderByChild("info/bloodType").equalTo(bloodType))
        yield put(actions.bloodDonorLoadDataSuccess(data))
    } catch (error) {

    }
}


export function* BloodDonorChangeDataByDropDown(action) {
    
    const bloodType = action.event.target.value;
    yield put(actions.bloodDonorSetLoading())
    try {
        console.log("im in dropdown")
        const data = yield call(fb.database.read, firebase.database().ref('users').orderByChild("info/bloodType").equalTo(bloodType))
        console.log(data)
        yield put(actions.bloodDonorLoadDataSuccess(data))
    } catch (error) {
        console.log(error)
    }
}




// firebase querys
