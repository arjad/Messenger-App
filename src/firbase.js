import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyBe3JGLfeEjFLvuymZxv4GCXM4iTJ9XK8g",
  authDomain: "messenger-arjad.firebaseapp.com",
  projectId: "messenger-arjad",
  storageBucket: "messenger-arjad.appspot.com",
  messagingSenderId: "630229420809",
  appId: "1:630229420809:web:bd94a941805b45f70aa1d8",
  measurementId: "G-53FDTSG11T"
});

const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };