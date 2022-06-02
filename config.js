import firebase from 'firebase'
require('@firebase/firestore');
const firebaseConfig = {
    apiKey: "AIzaSyA8LIho2GauW0-zYotPJ4tQ5nKvPnDy7Wk",
    authDomain: "e-library-738cf.firebaseapp.com",
    projectId: "e-library-738cf",
    storageBucket: "e-library-738cf.appspot.com",
    messagingSenderId: "550199156931",
    appId: "1:550199156931:web:03529b01e11f43a9d24276"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()