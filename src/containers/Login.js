import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/auth';
import { Redirect } from 'react-router-dom';
import Login from '../components/Login';
import PropTypes from 'prop-types';

export class LoginContainer extends Component {

  handleSubmit = function (userData) {
    if (userData.login && userData.password) {
      this.actions.logIn(userData);
    }
  }

  handleBack() {
    this.history.push('/');
  }

  render() {
    const { from } = this.props.location.pathname || '/';
    const redirectStatus = this.props.isLogin;
    const redirectBlock = redirectStatus === true ? <Redirect to={from || '/scan'} /> : '';
    return (
      <Login
        handleSubmit={this.handleSubmit}
        handleBack={this.handleBack}
        redirectBlock={redirectBlock}
        {...this.props}
      />
    )
  }
}

LoginContainer.defaultProps = {
  isLogin: false
}

Login.propTypes = {
  isLogin: PropTypes.bool.isRequired
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
