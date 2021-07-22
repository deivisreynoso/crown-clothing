import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDuoqlWJXFuyQ6jWjMlH3HAMHwAQfZU6U8",
  authDomain: "crwn-db-42006.firebaseapp.com",
  projectId: "crwn-db-42006",
  storageBucket: "crwn-db-42006.appspot.com",
  messagingSenderId: "776392274981",
  appId: "1:776392274981:web:e4f50c0a656961ce843bcc",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
