// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// apiKey: "AIzaSyCV8nIp_wAxefWGhlVC11jvi-wlB1CA8t8",
// authDomain: "phone-auth-76ae2.firebaseapp.com",
// projectId: "phone-auth-76ae2",
// storageBucket: "phone-auth-76ae2.appspot.com",
// messagingSenderId: "502933850380",
// appId: "1:502933850380:web:8212c95b3e7f4e6893a129",
