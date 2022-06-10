import { initializeApp } from "firebase/app";
import { signInWithPopup, signInWithRedirect, getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAIgpCzIGb_-EkWFT4GqwtRlXdoa2eKhnA",
  authDomain: "crwn-clothing-db-fe2ee.firebaseapp.com",
  projectId: "crwn-clothing-db-fe2ee",
  storageBucket: "crwn-clothing-db-fe2ee.appspot.com",
  messagingSenderId: "673868926598",
  appId: "1:673868926598:web:486508d802b46bab678b07"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
   prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () =>  signInWithPopup(auth, provider)