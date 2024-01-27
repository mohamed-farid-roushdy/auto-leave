
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier,onAuthStateChanged,onIdTokenChanged } from 'firebase/auth';


const firebaseConfig = {

    apiKey: "AIzaSyAEZSjuTRp43o5ttrQOOYX8f1Onl4HJ1Rs",
    authDomain: "auto-leave.firebaseapp.com",
    projectId: "auto-leave",
    storageBucket: "auto-leave.appspot.com",
    messagingSenderId: "895566885316",
    appId: "1:895566885316:web:c89f2ec04deb20b6957491",
    measurementId: "G-7119FYHX0B"
    // apiKey: process.env.NEXT_PABLIC_FIREBASE_API_KEY,
    // authDomain: process.env.NEXT_PABLIC_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.NEXT_PABLIC_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.NEXT_PABLIC_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.NEXT_PABLIC_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.NEXT_PABLIC_FIREBASE_APP_ID,
    // measurementId: process.env.NEXT_PABLIC_FIREBASE_MEASUREMENT_ID
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };








