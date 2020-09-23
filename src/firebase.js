import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6RVpl-lCWGJePA0FDDIoAvaSSDDfJ-lE",
  authDomain: "todo-list-3f41c.firebaseapp.com",
  databaseURL: "https://todo-list-3f41c.firebaseio.com",
  projectId: "todo-list-3f41c",
  storageBucket: "todo-list-3f41c.appspot.com",
  messagingSenderId: "716532002998",
  appId: "1:716532002998:web:1f23428927670e49fab617",
  measurementId: "G-SGMG8KRWX1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
