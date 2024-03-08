import { initializeApp } from 'firebase/app'
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBWYwQtU-3Kwh4qUxAhXjeK0NJiGFdJJtE',
  authDomain: 'bemaste-prueba.firebaseapp.com',
  projectId: 'bemaste-prueba',
  storageBucket: 'bemaste-prueba.appspot.com',
  messagingSenderId: '764559202400',
  appId: '1:764559202400:web:0602b649407fb9a7170b05',
  measurementId: 'G-CXMSQ60B1M'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export default app
