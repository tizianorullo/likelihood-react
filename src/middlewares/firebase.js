import firebase from 'firebase';

import {PROJECT_ADD, PROJECT_FETCH} from '../actions/project'
import {FEATURE_UPDATE} from '../actions/feature'

const config = {
  apiKey: "AIzaSyC43umHbsRhAUzieJYyEdcyWCcvGWNbpp4",
  authDomain: "likelihood-59000.firebaseapp.com",
  databaseURL: "https://likelihood-59000.firebaseio.com"
}

firebase.initializeApp(config);
const db = firebase.database();

const firebaseMiddleware = store => next => action => {
  switch (action.type) {
    case PROJECT_FETCH:
      db.ref('/projects').once('value', snap => {
        next({...action, payload: snap.val()})
      })
      break;
    case PROJECT_ADD:
    console.log('click');
      db.ref('/projects/' + action.payload.id).set(action.payload).then(next(action))
      break;
    case FEATURE_UPDATE:
    console.log(action.payload);
      console.log(store.getState());
      break;
    default:
      next(action)
  }
}

export default firebaseMiddleware
