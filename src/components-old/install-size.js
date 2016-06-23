import React from 'react'

export default React.createClass({
  installKw: function () {
    if (this.props.installSizeKw != '')
    return this.props.installSizeKw + ' kW'
  },

  installMeter: function () {
    if (this.props.installSizeMeter != '')
    return this.props.installSizeMeter + ' (square meters)'
  },

  render: function() {
    return (
      <div className='installSize install-calc col-md-4 col-sm-4 col-sm-offset-1 col-md-offset-1 panel'>
          <h2>Your recommended installation size</h2>
          <h3>{this.installKw()}</h3>
          <p>{this.installMeter()}</p>
      </div>
    )
  },
})
