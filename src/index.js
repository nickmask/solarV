import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import kWGenerator from './components/kWGenerator'
import slider from './components/entry'
import mapAutoComplete from './components/mapAutoComplete'
import energySlider from './components/energySlider'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))




//what use to be rendered on the only page

$(document).ready( () => {
      slider()
      energySlider()
      mapAutoComplete()
})
