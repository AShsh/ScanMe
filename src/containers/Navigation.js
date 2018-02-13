import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/auth';
import * as scanActions from '../actions/scan';
import { i18n } from '../i18n/lang';
import Navigation from '../components/Navigation';

export class NavigationContainer extends Component {

    logOutHandler = function () {
        this.props.scanActions.clearResult();
        this.props.userActions.logOut();
    }

    render() {
        const signLink = this.props.login ?
                <a href='' onClick={(e) => this.logOutHandler()}>
                    {i18n.t('nav_signOut')}
                </a>:
                <NavLink exact to='/' >
                    {i18n.t('nav_signIn')}
                </NavLink>;

        const scanLink = 
            <NavLink to='/scan'>
                {i18n.t('nav_scan')}
            </NavLink>
        ;

        const buttonsData = [signLink, scanLink];
        return (
            <Navigation
                logOutHandler={this.logOutHandler}
                buttonsData={buttonsData}
                {...this.props}
            />
        )
    }
}

function mapStateToProps() {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        scanActions: bindActionCreators(scanActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
