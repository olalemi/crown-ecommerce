
import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({

    prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid)

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
  

   try {
    await setDoc(userDocRef, {

      displayName,
      email,
      createdAt
    });

   } catch(error){
    console.log("error creating the user", error.message)
   }
  }

  return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password)return;

  return await createUserWithEmailAndPassword(auth, email, password);
  
}