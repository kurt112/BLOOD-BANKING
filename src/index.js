// utility file
import App from './App';
import * as serviceWorker from './serviceWorker';

// // css file
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import './index.css';
import 'fontawesome-4.7/css/font-awesome.min.css';

// redux'
import { actionCreators, composeWithDevTools } from 'redux-devtools-extension';

// redux sagas
import createSagaMiddleware from 'redux-saga';

// redux reducer
import uiOptions from './store/reducers/uiOptions';
import auth from './store/reducers/auth';
import profile from './store/reducers/profile';
import bloodDonors from './store/reducers/table-data/blood-donor'
import bloodReceivers from './store/reducers/table-data/blood-receiver'
import { watchAuthLogin, watchProfile, watchRegisterProfile, watchBloodDonorDrowpDownChange,watchBloodReceiverDrowpDownChange,watchBloodDonorTableData,wathcBloodRecieverTableData} from './store/sagas';

const reducersCombine = combineReducers({
  ui: uiOptions,
  profile,
  auth,
  bloodDonors,
  bloodReceivers
})
const composeEnhancers = composeWithDevTools({ actionCreators, trace: true })
const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducersCombine,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(watchProfile)
sagaMiddleware.run(watchAuthLogin)
sagaMiddleware.run(watchRegisterProfile)
sagaMiddleware.run(wathcBloodRecieverTableData)
sagaMiddleware.run(watchBloodDonorTableData)
sagaMiddleware.run(watchBloodDonorDrowpDownChange)
sagaMiddleware.run(watchBloodReceiverDrowpDownChange)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
