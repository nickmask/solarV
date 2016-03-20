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
      <div>
        <h2>What's your monthly electricity bill?</h2>
        <Slider
        defaultValue={450}
        min={this.state.min}
        max={this.state.max}
        onChange={this.onSliderChange}
        />
      </div>
    )
  },
})
