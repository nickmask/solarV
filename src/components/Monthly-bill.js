import React from 'react'
import Slider from 'rc-slider'

export default React.createClass({
  getInitialState: function() {
    return {
      min: 100,
      max: 800,
    };
  },
  onSliderChange: function(value) {
    this.props.setBill(value);
  },
  onMinChange: function(e) {
    this.setState({
      min: +e.target.value || 0,
    });
  },
  onMaxChange: function(e) {
    this.setState({
      max: +e.target.value || 100,
    });
  },

  render: function() {
    return (
      <div className='monthlyBill install-calc col-md-5 col-sm-5 col-sm-offset-1 col-md-offset-1 panel'>
        <h2>What's your monthly electricity bill?</h2>
        <Slider
        defaultValue={300}
        min={this.state.min}
        max={this.state.max}
        onChange={this.onSliderChange}
        />
      </div>
    )
  },
})
