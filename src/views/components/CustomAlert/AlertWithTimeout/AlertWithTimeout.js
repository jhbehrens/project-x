import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class AlertWithTimeout extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.onTimeout();
        },this.props.timeout)
    }

    render() {
        return (
            <Alert color={this.props.errorlevel}>
                {this.props.children}
            </Alert>
        )
       
    }
}

export default AlertWithTimeout;