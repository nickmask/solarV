import React from 'react'
import EnterAdress from '../components/Enter-address'
import SunlightHours from '../components/Sunlight-hours'
import MonthlyBill from '../components/Monthly-bill'
import InstallSize from '../components/Install-size'
import UpfrontCost from '../components/Upfront-cost'
import TotalSavings from '../components/Total-savings'
import PaybackYears from '../components/Payback-years'
import path from 'path'
import request from 'superagent'

export default React.createClass({
  getInitialState: function () {
    return {
      sunlightHoursPerYear: '',
      sunlightHoursPerDay: '',
      electPricePerKw: 0.28859,
      solarPanelEfficency: 0.2,
      kwPerSquareMeter: 1,
      city: '',
      elecBill: '',
      installSizeMeter: '',
      installSizeKw: '',
      kwUsagePerDay: '',
      kwPerDayPerSquareMeter: '',
      kwPerSqMeter: '',
    }
  },
  setBill: function(value) {
    this.setState({
      elecBill: value,
    })
    this.setInstall()
  },

  setInstall: function () {
    if (this.state.elecBill != '' && this.state.city != '') {
      this.setState({ kwUsagePerDay: Math.round(((this.state.elecBill / this.state.electPricePerKw) / 30.4) * 100) / 100 })
      this.setState({ sunlightHoursPerDay: this.state.sunlightHoursPerYear / 365.25})
      this.setState({ kwPerSqMeter: this.state.solarPanelEfficency / this.state.kwPerSquareMeter})
      this.setState({ kwPerDayPerSquareMeter: this.state.sunlightHoursPerDay * this.state.kwPerSqMeter })
      this.setState({ installSizeKw: Math.round((this.state.kwUsagePerDay / this.state.sunlightHoursPerDay) * 100) / 100 })
      this.setState({ installSizeMeter: Math.round(this.state.kwUsagePerDay / this.state.kwPerDayPerSquareMeter)})
      // console.log('sunlightHoursPerYear', this.state.sunlightHoursPerYear)
      // console.log('sunlightHoursPerDay', this.state.sunlightHoursPerDay)
      // console.log('electPricePerKw', this.state.electPricePerKw)
      // console.log('solarPanelEfficency', this.state.solarPanelEfficency)
      // console.log('kwPerSquareMeter', this.state.kwPerSquareMeter)
      // console.log('city', this.state.city)
      // console.log('elecBill', this.state.elecBill)
      // console.log('installSizeMeter', this.state.installSizeMeter)
      // console.log('installSizeKw', this.state.installSizeKw)
      // console.log('kwUsagePerDay', this.state.kwUsagePerDay)
      // console.log('kwPerDayPerSquareMeter', this.state.kwPerDayPerSquareMeter)
      // console.log('kwPerSqMeter', this.state.kwPerSqMeter)
    }
  },

  setCity: function (city) {
    this.setState({city: city})
    this.getSunlightHours(this.state.city)
  },

  getSunlightHours: function (city) {
    var UrlCity = path.join('https://solar-v.firebaseio.com/', this.state.city + '.json')
    request
      .get(UrlCity)
      .end(function(err, res){
        if (err) throw err
        this.setState({sunlightHoursPerYear: JSON.parse(res.text).year})
      }.bind(this));
  },

  render() {
    return (
      <div>
        <EnterAdress
        setCity={this.setCity}
        city={this.state.city}
        />
        <SunlightHours
        sunlightHours={this.state.sunlightHoursPerYear}
        />
        <h1>Quick installation calculator</h1>
        <MonthlyBill
        setBill={this.setBill}
        />
        <InstallSize
        elecBill={this.state.elecBill}
        installSizeMeter={this.state.installSizeMeter}
        installSizeKw={this.state.installSizeKw}
        />
        <h1>Your installation</h1>
        <UpfrontCost />
        <TotalSavings />
        <PaybackYears />
      </div>
    )
  }
})
