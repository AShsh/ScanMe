import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { i18n } from '../i18n/lang';

class Result extends Component {

  render() {
    return (
      <div className='main'>
        <div className='result'>
          {this.props.scan}
        </div>
        <button className='btn scan-again' onClick={() => this.props.handleNewScan()}>{i18n.t('result_scanAgain')}</button>
      </div>
    )
  }
}

Result.propTypes = {
  handleNewScan: PropTypes.func.isRequired,
  scan: PropTypes.string.isRequired
}

export default Result;