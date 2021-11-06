//initialize your database
// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmqixULJW2wR9zyZAxrfPufN6THg9aWYM",
  authDomain: "attendaceapp-8c1fe.firebaseapp.com",
  projectId: "attendaceapp-8c1fe",
  storageBucket: "attendaceapp-8c1fe.appspot.com",
  messagingSenderId: "437696086781",
  appId: "1:437696086781:web:33766a207b09e0bc317494"
};

// Initialize Firebase
if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
export default firebase.database()
 

  