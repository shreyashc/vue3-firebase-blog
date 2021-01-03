import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCcOLqcCszNg7iD8Bfqu56xMsZQOEtIEuw",
  authDomain: "hc-vue-blog.firebaseapp.com",
  projectId: "hc-vue-blog",
  storageBucket: "hc-vue-blog.appspot.com",
  messagingSenderId: "843235325624",
  appId: "1:843235325624:web:ce5010f0a754b52f3e664d",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const firebaseAuth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectFirestore, timestamp, firebaseAuth, provider };
