import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import { HashRouter } from 'react-router-dom'

import routes from 'routes'
import createRootReducer from 'reducers'



const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore( 
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter history={history}>
      {routes}
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)

