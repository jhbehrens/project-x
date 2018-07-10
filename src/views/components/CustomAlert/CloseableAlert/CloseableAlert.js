import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class CloseableAlert extends Component {

    render() {
        return (
            <Alert toggle={this.props.onClose} color={this.props.errorlevel}>
            {this.props.children}
        </Alert>
        )
    }
}

export default CloseableAlert;