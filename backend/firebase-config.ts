import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";
import "firebase/storage";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCsNV_3vUeS6UQzVvDlk-n3PfJh5l3gX1U",
  authDomain: "christopher-wang-design.firebaseapp.com",
  projectId: "christopher-wang-design",
  storageBucket: "christopher-wang-design.firebasestorage.app",
  messagingSenderId: "846516669371",
  appId: "1:846516669371:web:a0c978dda4535dd507529e",
  measurementId: "G-VWBG14MNKJ"
};

var firebaseapp = null;

if (!firebase.apps.length) {
  firebaseapp = firebase.initializeApp(config);
} else {
  firebaseapp = firebase.app(); // if already initialized, use that one
}

const projectStorage = firebaseapp.storage();
const projectFirestore = firebaseapp.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
const auth = firebase.auth();
const persistance = firebase.auth.Auth.Persistence.NONE;

export { projectStorage, projectFirestore, timeStamp, auth, persistance };
