import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDkH39fAZ4-lnPxdeI0azKR31rEr3wnVcU",
    authDomain: "linkedin-clone-dda92.firebaseapp.com",
    projectId: "linkedin-clone-dda92",
    storageBucket: "linkedin-clone-dda92.appspot.com",
    messagingSenderId: "456305694757",
    appId: "1:456305694757:web:8d7fce00471f675348c7cc"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
  