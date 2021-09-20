import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config =  {
    apiKey: "AIzaSyAcVEUUJnSKMAfG0ZX80gaLHn6Yqi3PLEg",
    authDomain: "crwn-db-5ef6e.firebaseapp.com",
    projectId: "crwn-db-5ef6e",
    storageBucket: "crwn-db-5ef6e.appspot.com",
    messagingSenderId: "844781540006",
    appId: "1:844781540006:web:732ad9f1f568f2791b5a67",
    measurementId: "G-DP0EBQLV0H"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
