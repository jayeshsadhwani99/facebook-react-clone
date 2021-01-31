import firebase from 'firebase';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANLsKyD0RDYziiMhEDeSNJXyN4UIHZtEs",
  authDomain: "facebook-clone-f3dbc.firebaseapp.com",
  projectId: "facebook-clone-f3dbc",
  storageBucket: "facebook-clone-f3dbc.appspot.com",
  messagingSenderId: "1081102061764",
  appId: "1:1081102061764:web:f76924e2f8f2686647b991",
  measurementId: "G-9H2M4WX0S2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;