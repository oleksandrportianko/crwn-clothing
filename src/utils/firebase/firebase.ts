import { initializeApp } from "firebase/app";
import { signInWithPopup, getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, NextOrObserver, User, UserCredential } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, getDocs, query, QueryDocumentSnapshot } from 'firebase/firestore'

import { AdditionalInformation, Category, ObjectToAdd, UserData } from "../../types";

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

provider.setCustomParameters({
   prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () =>  signInWithPopup(auth, provider)

export const db = getFirestore();

export const addToCollectionAndDocument = async <T extends ObjectToAdd>(collectionKey: string, objectToAdd: T[]): Promise<void> => {
   const collectionRef = collection(db, collectionKey)
   const batch = writeBatch(db)

   objectToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase())
      batch.set(docRef, object)
   })

   await batch.commit();
}

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
   const collectionRef = collection(db, 'categories')
   const q = query(collectionRef)

   const queryShapshot = await getDocs(q)
   return queryShapshot.docs.map((snapshot) => snapshot.data() as Category) 
}

export const createDocumentUserFromAuth = async (userAuth: User, additionalInformation = {} as AdditionalInformation): Promise<void | QueryDocumentSnapshot<UserData>> => {
   if (!userAuth) return;

   const userDocRef = doc(db, 'users', userAuth.uid)

   const userData = await getDoc(userDocRef)
  
   if (!userData.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation })
      } catch (error) {
         console.log('Error creating the user ', error)
      }
   }

   return userData as QueryDocumentSnapshot<UserData>
}

export const userAuthCreatedWithEmailAndPassword = async (email: string, password: string): Promise<UserCredential | void> => {
   if (!email || !password) return;

   try {
      return createUserWithEmailAndPassword(auth, email, password)
   } catch (error) {
      console.log(error)
   }
}

export const signInAuthWithEmailAndPassword = async (email: string, password: string): Promise<UserCredential | void> => {
   if (!email || !password) return;

   try {
      return signInWithEmailAndPassword(auth, email, password)
   } catch (error) {
      console.log(error)
   }
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = async (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback)

export const getCurrentUser = (): Promise<User | null> => {
   return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
         unsubscribe()
         resolve(userAuth)
      },
         reject
      )
   })
}