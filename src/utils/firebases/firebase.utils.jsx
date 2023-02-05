import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZ9BsbE-hgz4uxfQqgo40gBbLLAn4hap0",
  authDomain: "cerci-db.firebaseapp.com",
  projectId: "cerci-db",
  storageBucket: "cerci-db.appspot.com",
  messagingSenderId: "230747357627",
  appId: "1:230747357627:web:401f1e3a5aea2405ce449e",
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth(app);
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, `users/${userAuth.uid}`);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Kullanıcı oluşturulurken bir hata oluştu!", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  try {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log("Kullanıcı oluşturulurken bir hata oluştu!", error.message);
  }
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  try {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log("Giriş yapılırken bir hata oluştu!", error.message);
  }
};
