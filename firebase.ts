// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgrYNpW9anA4mBUYtgrhh445WhZqbywcc",
    authDomain: "netflix-clone-99297.firebaseapp.com",
    projectId: "netflix-clone-99297",
    storageBucket: "netflix-clone-99297.appspot.com",
    messagingSenderId: "1032055449900",
    appId: "1:1032055449900:web:72038e0f536d84f71e2489"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }