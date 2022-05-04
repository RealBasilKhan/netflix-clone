// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAFb1sMXwriwpsdtv7yyoHh3HEsO-RwV1k',
  authDomain: 'netflix-clone-350a1.firebaseapp.com',
  projectId: 'netflix-clone-350a1',
  storageBucket: 'netflix-clone-350a1.appspot.com',
  messagingSenderId: '1077470309441',
  appId: '1:1077470309441:web:c0b805aa10d6c285366ac0',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
