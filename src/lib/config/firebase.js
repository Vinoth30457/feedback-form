import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBExhtDzYQF0KDakYS4ZMzSRoqGoN-KNpA",
  authDomain: "feedback-c4078.firebaseapp.com",
  projectId: "feedback-c4078",
  storageBucket: "feedback-c4078.appspot.com",
  messagingSenderId: "146976685129",
  appId: "1:146976685129:web:811bf62a9736b6a6835398",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { auth, provider, db };
// apiKey: process.env.REACT_APP_API_KEY,
// authDomain: process.env.REACT_APP_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_PROJECT_ID,
// storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_SENDER_ID,
// appId: process.env.REACT_APP_APP_ID
