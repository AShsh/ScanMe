import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as scanActions from '../actions/scan';
import Result from '../components/Result';

export class ResultContainer extends Component {

    handleNewScan() {
        this.actions.clearResult();
    }

    render() {
        return (
            <Result
                handleNewScan={this.handleNewScan}
                scan={this.props.scan}
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
        actions: bindActionCreators(scanActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer);
