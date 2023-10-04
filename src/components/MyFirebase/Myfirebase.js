// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBonOjdPUG-2npZiqjhWp9Kq8iNvjMFMRA",
  authDomain: "pr-admin-6d5e4.firebaseapp.com",
  projectId: "pr-admin-6d5e4",
  storageBucket: "pr-admin-6d5e4.appspot.com",
  messagingSenderId: "362864259639",
  appId: "1:362864259639:web:d33e9edbcd4937bbd585b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app; 