import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeContainer from './Home';
import LoginContainer from './Login';
import ScanContainer from './Scan';
import NavigationContainer from './Navigation';
import ResultContainer from './Result';
import { setLanguage } from '../i18n/lang';
import { CURRENT_LANG } from '../constants/lang';

class App extends Component {

  componentWillMount() {
    setLanguage(CURRENT_LANG);
  }

  render() {
    const LoginPage = (props) => {
      return (
        <LoginContainer
          isLogin={this.props.isLogin}
          {...props}
        />
      );
    }

    const NavigationTemplate = (props) => {
      return (
        <NavigationContainer
          login={this.props.isLogin}
          {...props}
        />
      );
    }

    const PrivatePage = (props) => {
      return (
        this.props.isLogin === true ?
          <ScanContainer scan={this.props.scan} {...props} /> : <Redirect to={{ pathname: '/login' }} />
      );
    }

    const PrivatePageResult = (props) => {
      return (
        this.props.scan ?
          <ResultContainer scan={this.props.scan} {...props} /> : <Redirect to={{ pathname: '/scan' }} />
      );
    }

    return (
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route path='/login' component={LoginPage} />
            <Route path='/scan/result' component={PrivatePageResult} />
            <Route path='/scan' component={PrivatePage} />
          </Switch>

          <Switch>
            <Route path='(/|/scan)' component={NavigationTemplate} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogin: state.auth.isLogin,
    scan: state.scan.data
  }
}

export default connect(mapStateToProps)(App);
