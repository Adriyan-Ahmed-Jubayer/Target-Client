// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxBRxBlfC-GX3paTs99O6tvx-I0wecNlg",
  authDomain: "target-5eb94.firebaseapp.com",
  projectId: "target-5eb94",
  storageBucket: "target-5eb94.appspot.com",
  messagingSenderId: "1036405479906",
  appId: "1:1036405479906:web:03f5b968bf81af1e6a01bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;