// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC17XDrdTqrFf0xymvBc4CDdimKUVk3ARQ",
  authDomain: "assignment-11-97ddc.firebaseapp.com",
  projectId: "assignment-11-97ddc",
  storageBucket: "assignment-11-97ddc.appspot.com",
  messagingSenderId: "689764971864",
  appId: "1:689764971864:web:a8aca7a661d9dc4f5b612d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;