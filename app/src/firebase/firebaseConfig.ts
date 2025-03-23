import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD_orzrOOSrTXfXHGrWWdrAtySnkkAhaRo',
  authDomain: 'receipt-dispenser.firebaseapp.com',
  projectId: 'receipt-dispenser',
  storageBucket: 'receipt-dispenser.firebasestorage.app',
  messagingSenderId: '238919439058',
  appId: '1:238919439058:web:8e5203f502a9af19c2130b',
  measurementId: 'G-WL6L8M6QL3',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
