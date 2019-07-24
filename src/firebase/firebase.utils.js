import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyD4RaShYChsE03eSvVtbbPo_x8CX1l_dpA",
    authDomain: "my-ecom-db.firebaseapp.com",
    databaseURL: "https://my-ecom-db.firebaseio.com",
    projectId: "my-ecom-db",
    storageBucket: "",
    messagingSenderId: "1022542816755",
    appId: "1:1022542816755:web:5bb63ecfbbb69503"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;