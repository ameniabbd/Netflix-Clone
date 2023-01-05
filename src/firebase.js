

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDrN0AOrLLWn2-hHdC_2hr9OMthP1x0wbE",
  authDomain: "coworky-7b28a.firebaseapp.com",
  databaseURL: "https://coworky-7b28a.firebaseio.com",
  projectId: "coworky-7b28a",
  storageBucket: "coworky-7b28a.appspot.com",
  messagingSenderId: "1074645361606",
  appId: "1:1074645361606:web:ae6d1ab55e40f730f788c7"
}
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
