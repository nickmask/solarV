import React from 'react'

export default React.createClass({
  getInitialState: function () {
    return {
      sunlightHours: ''
    }
  },

  getSunlightHours: function () {
    var myDataRef = new Firebase('https://fuo5592uo7o.firebaseio-demo.com/');
  },

  render: () => {
  return (
    <div className='sunlightHours'>
      <h2>Hours of sunlight per year</h2>
      <span></span>
    </div>
  )
  }
})
