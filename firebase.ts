// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg0kY42UuZKbe1Wq6a_htZDbPI9P6MslQ",
  authDomain: "netflix-next-ts-tailwind.firebaseapp.com",
  projectId: "netflix-next-ts-tailwind",
  storageBucket: "netflix-next-ts-tailwind.appspot.com",
  messagingSenderId: "344933888503",
  appId: "1:344933888503:web:a7394f1f78dbba251e7ef2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }