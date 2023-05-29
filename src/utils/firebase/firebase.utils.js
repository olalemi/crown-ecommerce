
import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

import {getFirestore, doc,getDoc,setDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCdMRPHbB9D9ut3ge0twqKvgXKBcQVhK_c",
  authDomain: "crwn-clothing-db-608f0.firebaseapp.com",
  projectId: "crwn-clothing-db-608f0",
  storageBucket: "crwn-clothing-db-608f0.appspot.com",
  messagingSenderId: "155288046084",
  appId: "1:155288046084:web:e91bd894754f6bca9b8351"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({

    prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid)

  console.log(userDocRef);
    
}