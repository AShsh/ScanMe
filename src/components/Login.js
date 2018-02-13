import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { i18n } from '../i18n/lang';

class Login extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const userData = {
      login: e.target.login.value,
      password: e.target.password.value
    };
    this.props.handleSubmit(userData);
  }

  render() {
    return (
      <div className='wrap'>
        <div className='main'>
          <div className='back-btn' onClick={(e) => this.props.handleBack()}>{i18n.t('login_back')}</div>
        </div>
        <ul className='navigation'>
          <form className='login-form form' onSubmit={(e) => this.handleSubmit(e)}>
            <input name='login' type='text' placeholder={i18n.t('login_loginInput')} required />
            <input name='password' type='password' placeholder={i18n.t('login_passwordInput')} required />
            <input type='submit' className='btn' value={i18n.t('login_signIn')} />
          </form>
        </ul>
        {this.props.redirectBlock}
      </div>
    )
  }
}

Login.propTypes = {
  handleBack: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default Login;