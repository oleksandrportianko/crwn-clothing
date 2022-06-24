import { initializeApp } from "firebase/app";
import { signInWithPopup, getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, getDocs, query } from 'firebase/firestore'

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

export const db = getFirestore();

export const addToCollectionAndDocument = async (collectionKey, objectToAdd) => {
   const collectionRef = collection(db, collectionKey)
   const batch = writeBatch(db)

   objectToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase())
      batch.set(docRef, object)
   })

   await batch.commit();

   console.log('done')
}

export const getCategoriesAndDocuments = async () => {
   const collectionRef = collection(db, 'categories')
   const q = query(collectionRef)

   const queryShapshot = await getDocs(q)
   const categoryMap = queryShapshot.docs.reduce((acc, docShapshot) => {
      const {title, items} = docShapshot.data()
      acc[title.toLowerCase()] = items
      return acc
   }, {})

   return categoryMap
}

export const createDocumentUserFromAuth = async (userAuth, additionalInformation = {}) => {
   if (!userAuth) return;

   const userDocRef = doc(db, 'users', userAuth.uid)

   const userData = await getDoc(userDocRef)
  
   if (!userData.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation })
      } catch (error) {
         console.log('Error creating the user ', error.message)
      }
   }

   return userDocRef
}

export const userAuthCreatedWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return;

   try {
      return createUserWithEmailAndPassword(auth, email, password)
   } catch (error) {
      console.log(error.message)
   }
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return;

   try {
      return signInWithEmailAndPassword(auth, email, password)
   } catch (error) {
      console.log(error.message)
   }
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = async (callback) => onAuthStateChanged(auth, callback)