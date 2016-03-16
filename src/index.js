import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './modules/App'
import WhySolar from './modules/Why-solar'
import AboutUs from './modules/About-us'
import GetInTouch from './modules/Get-in-touch'
import Home from './modules/Home'

// import kWGenerator from '../components/install-size'
// import slider from '../components/entry'
// import mapAutoComplete from '../components/mapAutoComplete'
// import energySlider from '../components/energySlider'

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

//what use to be rendered on the only page

      // slider()
      // energySlider()
      // mapAutoComplete()
