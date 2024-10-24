import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Directly include the Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOd5ECgMhm1-ZnQ24xarH1PpLbjfgMW54",
  authDomain: "test-api-21587.firebaseapp.com",
  databaseURL: "https://test-api-21587-default-rtdb.firebaseio.com",
  projectId: "test-api-21587",
  storageBucket: "test-api-21587.appspot.com",
  messagingSenderId: "799269760293",
  appId: "1:799269760293:web:6769ef12be08610804becc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
