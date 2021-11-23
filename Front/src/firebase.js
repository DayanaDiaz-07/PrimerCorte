// import app from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth'

// const firebaseConfig = {
//     apiKey: "AIzaSyCMiLu2B3byM3xE3NKcQwPQBLTW-OmfTJY",
//     authDomain: "mi-primer-poyecto-370c9.firebaseapp.com",
//     projectId: "mi-primer-poyecto-370c9",
//     storageBucket: "mi-primer-poyecto-370c9.appspot.com",
//     messagingSenderId: "694219928040",
//     appId: "1:694219928040:web:afa590f054f193ad96b45d",
//     measurementId: "G-W2PWCW80TK"
//   };
  
//   // Initialize Firebase
// app = initializeApp(firebaseConfig);

// const db = app.firestore()
// const auth = app.auth()

// export {db,auth}

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCMiLu2B3byM3xE3NKcQwPQBLTW-OmfTJY",
  authDomain: "mi-primer-poyecto-370c9.firebaseapp.com",
  projectId: "mi-primer-poyecto-370c9",
  storageBucket: "mi-primer-poyecto-370c9.appspot.com",
  messagingSenderId: "694219928040",
  appId: "1:694219928040:web:afa590f054f193ad96b45d",
  measurementId: "G-W2PWCW80TK"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth()
  const db = firebase.firestore()

  export {auth,db,firebase}