import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBBabk_laz2k6i-zR3TYgLBZ9lfbInU1mU",
    authDomain: "crwn-db-dcf4f.firebaseapp.com",
    projectId: "crwn-db-dcf4f",
    storageBucket: "crwn-db-dcf4f.appspot.com",
    messagingSenderId: "1030923441535",
    appId: "1:1030923441535:web:7aa72723dafb744ed7364a",
    measurementId: "G-G8KDNF6Q7F"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;

