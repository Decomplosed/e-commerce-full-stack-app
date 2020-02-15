import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAFfKH1VP9LvPg11hXIEVZT9xnE3Hrj05c',
  authDomain: 'e-commerce-full-stack-app.firebaseapp.com',
  databaseURL: 'https://e-commerce-full-stack-app.firebaseio.com',
  projectId: 'e-commerce-full-stack-app',
  storageBucket: 'e-commerce-full-stack-app.appspot.com',
  messagingSenderId: '648130104254',
  appId: '1:648130104254:web:e1119ee1a88d1e60d307ef'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
