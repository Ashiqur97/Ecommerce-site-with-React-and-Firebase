import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCjgtfI6J8J9EBMw_dGPs3VjiKm1s9seDA",
  authDomain: "shopapp-83e2d.firebaseapp.com",
  projectId: "shopapp-83e2d",
  storageBucket: "shopapp-83e2d.appspot.com",
  messagingSenderId: "526807971991",
  appId: "1:526807971991:web:c20a4645ae7c1775c651d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

