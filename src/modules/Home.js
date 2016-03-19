import React from 'react'
import EnterAdress from '../components/Enter-address'
import SunlightHours from '../components/Sunlight-hours'

export default React.createClass({
  getInitialState: function () {
    return {
      sunlightHours: '',
      city: ''
    }
  },

  setCity: function (city) {
    this.setState({city: city})
  },

  getSunlightHours: function (city) {
    var UrlCity = path.join('https://solar-v.firebaseio.com/', this.state.city + '.json')
    request
      .get(UrlCity)
      .end(function(err, res){
        if (err) throw err
        this.setState({sunlightHours: JSON.parse(res.text).year})
    }.bind(this));
  },

  render() {
    return (
      <div>
      <EnterAdress setCity={this.state.setCity}/>
      <SunlightHours sunlightHours={this.state.sunlightHours}  />
      </div>
    )
  }
})
