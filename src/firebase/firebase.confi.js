

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWVgDvYyed9KsWohcFz95CGpg99giIgAo",
  authDomain: "auth-intregration-98a58.firebaseapp.com",
  projectId: "auth-intregration-98a58",
  storageBucket: "auth-intregration-98a58.appspot.com",
  messagingSenderId: "375555646514",
  appId: "1:375555646514:web:c1d920e8df7f490db6882b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;