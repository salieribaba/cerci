import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalData) => {
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
        ...additionalData,
      });
    } catch (error) {
      console.log("Kullanıcı oluşturulurken bir hata oluştu!", error.message);
    }
  }
  return userDocRef;
};
