
import firebase from '@firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDoazw1_Mxy_utAmBU8dQOO0ppwM2-mnSs",
    authDomain: "home-chore-tracker-6e22a.firebaseapp.com",
    projectId: "home-chore-tracker-6e22a",
    storageBucket: "home-chore-tracker-6e22a.appspot.com",
    messagingSenderId: "491040623592",
    appId: "1:491040623592:web:132608f04310fd33aeb25d"
  };

  //init firebase, connects to the backend
  firebase.initializeApp(firebaseConfig)

  //init services like firestore
const projFirestore= firebase.firestore()
const timestamp=firebase.firestore.Timestamp
const arrayUnion =firebase.firestore.arrayUnion
export { projFirestore,timestamp, arrayUnion, firebase }