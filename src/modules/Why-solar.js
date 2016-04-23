import React from 'react'

export default React.createClass({
  render() {
    return <div>Why solar?</div>
  }
})

import React, { PropTypes, Component } from 'react'
import { Row, Col } from 'react-bootstrap'
require('../www/stylesheets/blog.sass')

class Why extends Component {
  render () {
    return (
      <Row >
        <Col sm={12}>
          <div>
            <h1>Coming soon...</h1>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Why
