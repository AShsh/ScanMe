import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as scanActions from '../actions/scan';
import { Redirect } from 'react-router-dom';
import { i18n } from '../i18n/lang';
import Scan from '../components/Scan';

export class ScanContainer extends Component {

    handleScan(result) {
        this.props.actions.setResult(result);
    }

    openImageDialog = function () {
        this.refs.qrReader.openImageDialog();
    }

    render() {
        const { from } = this.props.location.pathname || '/';
        const redirectStatus = this.props.scan;
        const redirectBlock = !!redirectStatus ? <Redirect to={from || '/scan/result'} /> : '';

        const qrReaderBlock = <QrReader
            className='qr-reader'
            ref='qrReader'
            onError={(result) => this.handleError(result)}
            onScan={(result) => this.handleScan(result)}
            legacyMode
        />;
        const qrData = [qrReaderBlock, <input className='btn' type='button' value={i18n.t('scan_submitQr')} onClick={() => this.openImageDialog()} />];
        return (
            <Scan
                qrData={qrData}
                redirectBlock={redirectBlock}
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

export default connect(mapStateToProps, mapDispatchToProps)(ScanContainer);