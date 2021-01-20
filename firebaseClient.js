//setting up the auth so we can authenticate somebody

import firebase from 'firebase';

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAkCaXiJuLA1uo3SaPENYCv6gg8CJGgSpU",
    authDomain: "nextjs-firebase-787d4.firebaseapp.com",
    projectId: "nextjs-firebase-787d4",
    storageBucket: "nextjs-firebase-787d4.appspot.com",
    messagingSenderId: "693249814976",
    appId: "1:693249814976:web:43c800532d53809fa25825"
}

export default function firebaseClient() {

    if(!firebase.apps.length){
        firebase.initializeApp(FIREBASE_CONFIG)
    }

}