import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC43umHbsRhAUzieJYyEdcyWCcvGWNbpp4",
  authDomain: "likelihood-59000.firebaseapp.com",
  databaseURL: "https://likelihood-59000.firebaseio.com"
}

firebase.initializeApp(config);
const database = firebase.database();

export default database;
