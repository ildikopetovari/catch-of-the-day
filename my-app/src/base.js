import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAaJ70B0Q86SXfxhJeTArhzZotJBxWnJgI",
    authDomain: "catch-of-the-day-peto.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-peto.firebaseio.com",
    /*projectId: "catch-of-the-day-peto",
    storageBucket: "catch-of-the-day-peto.appspot.com",
    messagingSenderId: "851977835363",
    appId: "1:851977835363:web:0c942d4432c2906ef0f956",
    measurementId: "G-PKDQM48TQ1"*/
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;