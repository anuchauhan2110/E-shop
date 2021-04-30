import firebase from 'firebase'

const firebaseApp = firebase.initalizeApp({
    apiKey: "AIzaSyAPX-NxaraVqT-ho7bEhOa7XaHVcIAP39Q",
    authDomain: "clone-app-9bf02.firebaseapp.com",
    projectId: "clone-app-9bf02",
    storageBucket: "clone-app-9bf02.appspot.com",
    messagingSenderId: "958868287438",
    appId: "1:958868287438:web:d0819859ec985b1f34059f"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};


