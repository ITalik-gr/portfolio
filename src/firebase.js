// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAuV2GqVGChWaBYIRLX8jbvp70_DiRdeaE",
  authDomain: "italik-dev.firebaseapp.com",
  projectId: "italik-dev",
  storageBucket: "italik-dev.appspot.com",
  messagingSenderId: "825906095450",
  appId: "1:825906095450:web:2fbe128a09c55879c33f63",
  measurementId: "G-TTNB953P69"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);