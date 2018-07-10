import React, { Component } from 'react';
import { getAlertsForContext, alertActionCreators } from '../../../core/alert';
import { connect } from 'react-redux';
import CloseableAlert from './CloseableAlert/CloseableAlert';
import AlertWithTimeout from './AlertWithTimeout/AlertWithTimeout';

class CustomAlert extends Component {
    
    render() {
        
        let cmp = null;
        if(this.props.alerts) {
            cmp = this.props.alerts.map((alert) => {
                if(alert.closeable) {
                    return (
                        <CloseableAlert key={alert.id} errorlevel={alert.errorlevel} onClose={() => 
                            this.props.deleteAlert(alert.id)
                        }>{alert.message}</CloseableAlert>
                    )
                }
                else {
                    return (
                        <AlertWithTimeout key={alert.id}errorlevel={alert.errorlevel} timeout={alert.timeout}onTimeout={() => 
                            this.props.deleteAlert(alert.id)}
                            >{alert.message}
                        </AlertWithTimeout>
                    )
                }
            })
        }
        
        return cmp;
    }
}

const mapStateToProps = (state, ownProps) => ({
    alerts: getAlertsForContext(state, (ownProps.context || 'global'))
})

const mapDispatchToProps = {
    deleteAlert: alertActionCreators.deleteAlert
}


export default connect(mapStateToProps, mapDispatchToProps)(CustomAlert);