import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from '../components/Home';
import { i18n } from '../i18n/lang';

export default class HomeContainer extends Component {

    render() {
        const startLink = <Link className='btn' to='/login'>{i18n.t('home_startBtn')}!</Link>;
        return (
            <Home
                startLink={startLink}
                {...this.props}
            />
        )
    }
}