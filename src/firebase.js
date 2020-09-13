import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCFLmEscV1ddiP7eBiKMZJdbsBs7QSSui4",
    authDomain: "toktik-a0f5c.firebaseapp.com",
    databaseURL: "https://toktik-a0f5c.firebaseio.com",
    projectId: "toktik-a0f5c",
    storageBucket: "toktik-a0f5c.appspot.com",
    messagingSenderId: "987504241542",
    appId: "1:987504241542:web:266a27e8ec8810fd9a9a07",
    measurementId: "G-CHRYZ976JG"
  };

const firebaseApp =
firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;