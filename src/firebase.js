import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC1Vi49tpKb44r98Fwx02s9XS4IY5QeGu0",
    authDomain: "facebook-clone-b4e9c.firebaseapp.com",
    databaseURL: "https://facebook-clone-b4e9c.firebaseio.com",
    projectId: "facebook-clone-b4e9c",
    storageBucket: "facebook-clone-b4e9c.appspot.com",
    messagingSenderId: "950501325976",
    appId: "1:950501325976:web:b9bfa0727e2cdb6eb9e4ed",
    measurementId: "G-RN5XVBJTM8",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;


