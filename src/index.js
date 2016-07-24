import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index.js'
import { Provider } from 'react-redux'
require('./www/stylesheets/main')

import App from './containers/App'
import WhySolar from './components/Why-solar'
import AboutUs from './components/About-us'
import GetInTouch from './components/Get-in-touch'
import Home from './components/Home'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

function render () {
  ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/why-solar" component={WhySolar}/>
        <Route path="/about-us" component={AboutUs}/>
        <Route path="/get-in-touch" component={GetInTouch}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
  )
}

render()
