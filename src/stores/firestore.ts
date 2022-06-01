import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyD8pzSffzJFT01z9i6YafxjpaqZWYKuLSo',
  authDomain: 'matri-802a0.firebaseapp.com',
  projectId: 'matri-802a0',
  storageBucket: 'matri-802a0.appspot.com',
  messagingSenderId: '928590387608',
  appId: '1:928590387608:web:7e9137093e0d1d395073ed',
  measurementId: 'G-J6DSL4Q75Z',
}
initializeApp(firebaseConfig)
export const db = getFirestore()
export const auth = getAuth()
