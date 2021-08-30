// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getStorage, ref, uploadBytes } from "firebase/storage";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJUEYiT6SsWBg-rimTWFG_4w_lD1VR_OE",
  authDomain: "flixapp-e5bf1.firebaseapp.com",
  projectId: "flixapp-e5bf1",
  storageBucket: "flixapp-e5bf1.appspot.com",
  messagingSenderId: "678536118793",
  appId: "1:678536118793:web:cedd2e3243c42c389deed8",
  measurementId: "G-J542ZB15T2",
};
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const storage = getStorage();
// const analytics = getAnalytics(app);



firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();



export default storage;
