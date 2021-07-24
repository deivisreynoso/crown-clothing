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
//creating data
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createDate,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
