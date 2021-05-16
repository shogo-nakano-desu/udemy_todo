import firebase from "firebase/app";
import "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseApp = firebase.initializeApp({
    apiKey: "API KEY",
    authDomain: "projectID.firebaseapp.com",
    databaseURL: "https://projectID.firebaseio.com",
    projectId: "projectID",
    storageBucket: "projectID.appspot.com",
    messagingSenderId: "messagingSenderId",
    appId: "1:messagingSenderId:web:randomnumber",
});

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();