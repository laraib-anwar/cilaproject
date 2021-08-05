// import dotenv from 'dotenv'
import  firebase from "firebase/app";

//dotenv.config()


import "firebase/auth";
import "firebase/database";



//   var firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGE_SENDER_ID,
//     appId: process.env.APP_ID,
//     measurementId: process.env.MEASUREMENT_ID
//   };

  var firebaseConfig = {
    apiKey: "AIzaSyAQ_higbAaTHhiTnp0alnNyIvNVTSFU_mo",
    authDomain: "cilaauth.firebaseapp.com",
    projectId: "cilaauth",
    storageBucket: "cilaauth.appspot.com",
    messagingSenderId: "962595378445",
    appId: "1:962595378445:web:4d9581af362f14977e4c44",
    measurementId: "G-LMH5W7N1V2"
  };


let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
