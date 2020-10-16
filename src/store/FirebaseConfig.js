import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/firebase-database'
import ReduxSagaFirebase from 'redux-saga-firebase'

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAAK7KPcal-WFqjBAyUB-GFeWKXAgmncsI",
  authDomain: "blood-banking-936d8.firebaseapp.com",
  databaseURL: "https://blood-banking-936d8.firebaseio.com",
  projectId: "blood-banking-936d8",
  storageBucket: "blood-banking-936d8.appspot.com",
  messagingSenderId: "416615926884",
  appId: "1:416615926884:web:e01cb00224fdb26bc16371"
})

const reduxSagaFirebase = new ReduxSagaFirebase(firebaseConfig)

export default reduxSagaFirebase

export {firebase}