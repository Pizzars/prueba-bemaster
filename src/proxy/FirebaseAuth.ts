import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { getFirestore, collection, query, getDocs, addDoc } from 'firebase/firestore'
import { DataModel } from './queries/data/dataModel'

// import { getAnalytics } from "firebase/analytics";

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

getAuth(app)
getFirestore(app)

export enum AuthRequest {
  OK,
  ERROR
}
export enum AuthStatus {
  LOGGED,
  NO_USER,
  NO_VERIFIED
}

export const authVerification = async (report: (state: AuthStatus) => void) => {
  const auth = getAuth()
  const snapshot = onAuthStateChanged(auth, user => {
    if (user && user.uid) {
      report(AuthStatus.LOGGED)
      return
    }
    report(AuthStatus.NO_USER)
  })
  return snapshot
}
export const unsubscribe = async (subs: any) => {
  if (subs) subs()
}

export const signUp = async (data: { email: string; pass: string }) => {
  const { email, pass } = data

  const auth = getAuth()
  return createUserWithEmailAndPassword(auth, email, pass)
    .then(userCredential => {
      // Signed up
      // const user = userCredential.user;
      console.log(userCredential)
      return AuthRequest.OK
      // ...
    })
    .catch(error => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      console.log(error.message)
      return AuthRequest.ERROR
      // ..
    })
}

export const signIn = async (data: { email: string; pass: string }) => {
  const { email, pass } = data

  const auth = getAuth()
  return signInWithEmailAndPassword(auth, email, pass)
    .then(userCredential => {
      // Signed up
      // const user = userCredential.user;
      console.log(userCredential)
      return AuthRequest.OK
      // ...
    })
    .catch(error => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      console.log(error.message)
      return AuthRequest.ERROR
      // ..
    })
}

export const signOutUser = async () => {
  const auth = getAuth()
  await signOut(auth)
}

export const createDataFirebase = async (collectionName: string, data: DataModel) => {
  const db = getFirestore()

  const ref = collection(db, collectionName)
  await addDoc(ref, data)
}

export const getDataFirebase = async (collectionName: string) => {
  const db = getFirestore()
  const ref = collection(db, collectionName)
  const q = query(ref)
  const querySnapshot = await getDocs(q)
  if (querySnapshot && querySnapshot.empty) {
    return null
  }
  const list: any[] = []
  querySnapshot.forEach(doc => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, ' => ', doc.data())
    list.push({ ...doc.data(), id: doc.id })
  })
  return list
}
