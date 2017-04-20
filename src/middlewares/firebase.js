import firebase from 'firebase'
import {arrayMove} from 'react-sortable-hoc'

import {PROJECT_ADD, PROJECT_FETCH} from '../actions/project'
import {FEATURE_UPDATE, FEATURE_DELETE, FEATURE_SORT} from '../actions/feature'
import {BUDGET_UPDATE} from '../actions/budget'
import {RATE_UPDATE} from '../actions/rate'
import {NAME_UPDATE} from '../actions/name'

const config = {
  apiKey: "AIzaSyC43umHbsRhAUzieJYyEdcyWCcvGWNbpp4",
  authDomain: "likelihood-59000.firebaseapp.com",
  databaseURL: "https://likelihood-59000.firebaseio.com"
}

firebase.initializeApp(config)
const db = firebase.database()

const firebaseMiddleware = store => next => action => {
  switch (action.type) {
    case PROJECT_FETCH:
      db.ref('/projects').once('value', snap => {
        next({...action, payload: snap.val()})
      })
      break
    case PROJECT_ADD:
      db.ref('/projects/' + action.payload.id)
        .set(action.payload)
        .then(next(action))
      break
    case FEATURE_UPDATE:
      db.ref('/projects/' + store.getState().selectedProjectId + '/features/' + action.payload.id)
        .set(action.payload)
        .then(next(action))
      break
    case FEATURE_DELETE:
      db.ref('/projects/' + store.getState().selectedProjectId + '/features/' + action.payload.id)
        .remove()
        .then(next(action))
      break
    case FEATURE_SORT:
      const selectedProjectId = store.getState().selectedProjectId
      const features = arrayMove(store.getState().projects[selectedProjectId].features, action.payload.oldIndex, action.payload.newIndex)
      db.ref('/projects/' + selectedProjectId + '/features/')
        .set(features)
        .then(next(action))
      break
    case BUDGET_UPDATE:
      db.ref('/projects/' + store.getState().selectedProjectId + '/budget')
        .set(action.payload)
        .then(next(action))
      break
    case RATE_UPDATE:
      db.ref('/projects/' + store.getState().selectedProjectId + '/rate')
        .set(action.payload)
        .then(next(action))
      break
    case NAME_UPDATE:
      db.ref('/projects/' + store.getState().selectedProjectId + '/name')
        .set(action.payload)
        .then(next(action))
      break
    default:
      next(action)
  }
}

export default firebaseMiddleware
