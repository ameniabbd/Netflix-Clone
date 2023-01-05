

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCDUVSvheQMYiGIPoTR8MXdtnUNDbJ4YPI",

  authDomain: "facebook-messenger-clone-bdb58.firebaseapp.com",

  projectId: "facebook-messenger-clone-bdb58",

  storageBucket: "facebook-messenger-clone-bdb58.appspot.com",

  messagingSenderId: "524812685672",

  appId: "1:524812685672:web:46b1090bac5cbef8c206dd",

  measurementId: "G-PX6LGYXHY2"

};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
