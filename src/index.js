import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import WhySolar from './modules/Why-solar'
import AboutUs from './modules/About-us'
import GetInTouch from './modules/Get-in-touch'
import Home from './modules/Home'
import 'stylesheets/modules/main'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/why-solar" component={WhySolar}/>
      <Route path="/about-us" component={AboutUs}/>
      <Route path="/get-in-touch" component={GetInTouch}/>
    </Route>
  </Router>
), document.getElementById('app'))
