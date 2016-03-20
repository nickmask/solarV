import React from 'react'

export default React.createClass({

  render: function() {
    return (
      <div>
        <h2>Your recommended installation size</h2>
        <h3>{this.props.installSizeKw}</h3>
        <p>{this.props.installSizeMeter}</p>
      </div>
    )
  },
})
