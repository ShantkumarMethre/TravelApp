// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_kaaQOW7lG1tzPnDU-v4-l8oC_7okYPg",
  authDomain: "reactfirebase-83e32.firebaseapp.com",
  databaseURL: "https://reactfirebase-83e32.firebaseio.com",
  projectId: "reactfirebase-83e32",
  storageBucket: "reactfirebase-83e32.appspot.com",
  messagingSenderId: "65693491156",
  appId: "1:65693491156:web:e8fb3829ce97b9c64b0041",
  measurementId: "G-8BPF405SEZ"
};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const db=getFirestore(app)

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;
