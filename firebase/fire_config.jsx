import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDSmqhCxI92vXkwinPxiCXD_-EvPN4URuQ",
  authDomain: "test-logins-f61b4.firebaseapp.com",
  projectId: "test-logins-f61b4",
  storageBucket: "test-logins-f61b4.appspot.com",
  messagingSenderId: "166942756495",
  appId: "1:166942756495:web:a986d889477ddbb1feeafa",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
