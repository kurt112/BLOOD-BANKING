import { put, call, select } from 'redux-saga/effects'
import * as actions from '../actions/index'
import fb, { firebase } from '../FirebaseConfig'
import * as Selector from './selectors'
import { updateObject } from '../utility/store/updateObject'
export function* get_profile(action) {

  try {
    const data = yield call(fb.database.read, 'users')

    yield put(actions.profileClicked(data))
  } catch (err) {
    console.log(err)
  }
}

export function* register_profile(action) {

  const auth = yield select(Selector.auth)

  let profile = yield select(Selector.profile)
  
  // const database = yield firebase.database().ref('bloods').orderByChild('type').equalTo('AB+').limitToFirst(1)
  // const data = yield call(fb.database.read, database)

  try {
    const response = yield call(fb.auth.createUserWithEmailAndPassword, auth.email, auth.password)

    yield put(actions.authSuccess(response))
    try {
      yield call(fb.database.create, 'users', updateObject(profile, { uid: response.user.uid }))
    } catch (error) {
      // create fail
    }
  } catch (error) {
    yield put(actions.authFail(error))
  }
}


