import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNIbTmAF94b0NmZH9FkqdP63zPyB0_sws",
  authDomain: "tinder-clone-dd105.firebaseapp.com",
  projectId: "tinder-clone-dd105",
  storageBucket: "tinder-clone-dd105.appspot.com",
  messagingSenderId: "458460362804",
  appId: "1:458460362804:web:5fe13d2d3c050220267261",
  measurementId: "G-SXD9L4W0JT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const database = firebaseApp.firestore();

export default database; //export file so other file have acess to use it.
