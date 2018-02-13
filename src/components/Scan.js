import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Scan extends Component {

  render() {
    const qrData = this.props.qrData ?
      this.props.qrData.map((item, index) =>
        <div key={index}>{item}</div>
      ) : '';
    return (
      <div className='main'>
        {qrData}
        {this.props.redirectBlock}
      </div>
    )
  }
}

Scan.propTypes = {
  qrData: PropTypes.array,
  scan: PropTypes.string
}

export default Scan;