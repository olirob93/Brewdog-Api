import  firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAVqwfi5a96-3WfLTRmMazNP6IBMjr-MIA",
    authDomain: "brewdog-beers-api.firebaseapp.com",
    databaseURL: "https://brewdog-beers-api.firebaseio.com",
    projectId: "brewdog-beers-api",
    storageBucket: "brewdog-beers-api.appspot.com",
    messagingSenderId: "319350411713",
    appId: "1:319350411713:web:f455e604332d56b14f9f40",
    measurementId: "G-LHNGHBHHY1"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
