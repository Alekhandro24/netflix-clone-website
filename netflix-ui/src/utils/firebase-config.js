import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUJlDmDEFeGsrdfeLOWbHzcyGdnGLNbi4",
  authDomain: "react-netflix-cl0ne.firebaseapp.com",
  projectId: "react-netflix-cl0ne",
  storageBucket: "react-netflix-cl0ne.appspot.com",
  messagingSenderId: "766244516307",
  appId: "1:766244516307:web:3c94fd5eba0cdee9fcff26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
