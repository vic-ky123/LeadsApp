import React from 'react';
import Bridge from './src/routes/Bridge';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import firebase from "@react-native-firebase/app"
// import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyD0xNGkUZXDtkS6O4BHxfVQnKer61v2_cw",
//   authDomain: "leadsapp-7c759.firebaseapp.com",
//   projectId: "leadsapp-7c759",
//   storageBucket: "leadsapp-7c759.appspot.com",
//   messagingSenderId: "602481579311",
//   appId: "1:602481579311:web:91fd4aa9a228d9c682fdda"
// };

// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
//   // initializeApp(firebaseConfig);
// } else {
//   firebase.app()
// }

const App = () => {

  return (
    <>
      <Bridge />
    </>
  )
};

export default App;
