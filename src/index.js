import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// require('./www/stylesheets/main')

import App from './containers/views/App'
import WhySolar from './containers/views/Why-solar'
import AboutUs from './containers/views/About-us'
import GetInTouch from './containers/views/Get-in-touch'
import Home from './containers/views/Home'

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
