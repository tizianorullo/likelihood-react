import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import App from './components/app'
import reducers from './reducers'
import firebase from './middlewares/firebase'

const store = createStore(
  reducers,
  applyMiddleware(thunk, firebase)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)
