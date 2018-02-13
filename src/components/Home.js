import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {

  render() {
    return (
      <div className='main'>
        <img className='logo' src='assets/img/logo.png' alt='logo' />
        {this.props.startLink}
      </div>
    )
  }
}

Home.propTypes = {
  startLink: PropTypes.object
}

export default Home;