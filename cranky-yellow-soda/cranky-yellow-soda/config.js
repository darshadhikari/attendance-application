import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyABBWqHgT-jtwHdeFS0xaggVnfeguiRNAs",
  authDomain: "attendanceapp-caff2.firebaseapp.com",
  databaseURL: "https://attendanceapp-caff2-default-rtdb.firebaseio.com",
  projectId: "attendanceapp-caff2",
  storageBucket: "attendanceapp-caff2.appspot.com",
  messagingSenderId: "1090839374230",
  appId: "1:1090839374230:web:9f5bfa60bfac2da571d5b7"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database();