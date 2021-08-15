import React from 'react';
import Navigation from "./src/navigation/Navigation"
import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyC0irEkjsMY2AS_K5xKpyvAWqjF_Lu6MpU",
  authDomain: "insta-a9606.firebaseapp.com",
  projectId: "insta-a9606",
  storageBucket: "insta-a9606.appspot.com",
  messagingSenderId: "840349864128",
  appId: "1:840349864128:web:fae11d83c5b85abc341d25",
  measurementId: "G-DX8HSHT2F2"
};
firebase.initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//   firebase.initializeApp({});
// }else {
//   firebase.app(); 
// }
export default function App() {
  return (
      <Navigation/>
    )
}


