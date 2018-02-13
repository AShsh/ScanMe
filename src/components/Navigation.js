import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navigation extends Component {

  render() {
    return (
      <ul className='navigation'>
        {this.props.buttonsData.map((item, index) =>
          <li className='navigation__button' key={index}>
            {item}
          </li>
        )}
      </ul>
    )
  }
}

Navigation.propTypes = {
  buttonsData: PropTypes.array.isRequired
}

Navigation.defaultProps = {
  buttonsData: []
}

export default Navigation;