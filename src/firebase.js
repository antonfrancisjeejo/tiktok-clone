import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC4vEn1J_emFWTiX2d0PdiBjG-FgF8Z-UM",
  authDomain: "tiktok-clone-fc9cb.firebaseapp.com",
  databaseURL: "https://tiktok-clone-fc9cb.firebaseio.com",
  projectId: "tiktok-clone-fc9cb",
  storageBucket: "tiktok-clone-fc9cb.appspot.com",
  messagingSenderId: "880328721218",
  appId: "1:880328721218:web:546b37b64e535d221c7edb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
