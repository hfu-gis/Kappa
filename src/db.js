
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBz4G52BjCO_sMLqcZ3K63ojO9TwEu7O2s",
    authDomain: "kappa-2.firebaseapp.com",
    databaseURL: "https://kappa-2.firebaseio.com",
    projectId: "kappa-2",
    storageBucket: "kappa-2.appspot.com",
    messagingSenderId: "804322704525",
    appId: "1:804322704525:web:0efddb37023d8a5d8676c4",
    measurementId: "G-JH7BQ2GBB5"
};


const db = firebase.initializeApp(firebaseConfig).firestore()
export default db

console.log(db)

const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }