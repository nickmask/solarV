import React from 'react'
import $ from 'jquery'
import path from 'path'
import request from 'superagent'

export default React.createClass({
  getInitialState: function () {
    return {
      sunlightHours: ''
    }
  },

  componentDidMount: function (city) {
    var UrlCity = path.join('https://solar-v.firebaseio.com/', 'Auckland' + '.json')
    request
      .get(UrlCity)
      .end(function(err, res){
        if (err) throw err
        this.setState({sunlightHours: JSON.parse(res.text).year})
    }.bind(this));
  },

  render: () => {
  return (
    <div className='sunlightHours'>
      <h2>Hours of sunlight per year</h2>
      <span>{this.state.sunlightHours}</span>
    </div>
  )
  }
})
