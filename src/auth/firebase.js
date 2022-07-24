import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-E2ijmFjVrXtR32Rrw-S1fZGtuo3StR4",
  authDomain: "mentorzz.firebaseapp.com",
  projectId: "mentorzz",
  storageBucket: "mentorzz.appspot.com",
  messagingSenderId: "1033393950154",
  appId: "1:1033393950154:web:1c68de768f4cbbe91e5333"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);