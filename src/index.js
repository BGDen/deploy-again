import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router' // ConnectedRouter
import { composeWithDevTools } from 'redux-devtools-extension'
import { HashRouter } from 'react-router-dom'

import routes from 'routes'
import createRootReducer from 'reducers'

import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import { brown } from '@material-ui/core/colors'


const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore( 
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <Grid container direction="row" justify="center" alignItems="center" style={{width: '100%', height: '100vh', backgroundColor: brown[100]}}>
        <Provider store={store}>
          <HashRouter history={history}>
            {routes}
          </HashRouter>
        </Provider>
      </Grid>
  </React.Fragment>
  ,
  document.getElementById('root')
)

