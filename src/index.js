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
import Container from '@material-ui/core/Container'
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
    <Container maxWidth='xl' style={{padding: 0, width: '100vw', height: '100vh'}}>
      <Grid container direction="row" justify="center" alignItems="center" style={{height: '100%', backgroundColor: brown[100]}}>
        <Provider store={store}>
          <HashRouter history={history}>
            {routes}
          </HashRouter>
        </Provider>
      </Grid>
    </Container>
  </React.Fragment>
  ,
  document.getElementById('root')
)

