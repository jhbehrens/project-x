import React, { Component } from 'react';
import { Form, FormGroup, FormText, Label, Input, Button} from 'reactstrap';
import CustomAlert from '../CustomAlert/CustomAlert';
import { alertActionCreators } from '../../../core/alert';
import { connect } from 'react-redux';

class ErrorGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorlevel: '',
            message: '',
            closeable: false,
            timeout: '',
            context: ''
        }
    }

    contextChange = (event) => {
        this.setState({
            context: event.target.value
        })
    }

    messageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    errorlevelChange = (event) => {
        this.setState({
            errorlevel: event.target.value
        })
    }

    closeableChange = (event) => {
        this.setState({
            closeable: event.target.checked
        })
        
    }

    timeoutChange = (event) => {
        this.setState({
            timeout: event.target.value
        })
    }

    submitForm = () => {
        this.props.triggerAlert({
            errorlevel: this.state.errorlevel,
            message: this.state.message,
            closeable: this.state.closeable,
            timeout: this.state.timeout,
            context: this.state.context
        })
    }

    render() {
        return (
            <div>
                <legend>Error Generator</legend>
                <CustomAlert context="errorgenerator" />
                <Form>
                    <FormText>Generate custom errors: <br/>
                    Context: "global" or empty to create a global error. "errorgenerator" to create an error in the Error Generator <br/>
                    Errorlevel: Allowed Errorlevels are "info", "warning", "success", "error". Anything else will default to "info"
                    Message: Displayed errormessage <br/>
                    Timeout: Timeout in ms. Defaults to 2000.<br/>
                    Closeable: Switch close handle for error
                    </FormText>
                    <FormGroup>
                        <Label for="context">Context</Label>
                        <Input type="text" name="context" id="context" onChange={event => this.contextChange(event)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="errorlevel">Errorlevel</Label>
                        <Input type="text" name="errorlevel" id="errorlevel" onChange={event => this.errorlevelChange(event)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="message">Message</Label>
                        <Input type="text" name="message" id="message" onChange={event => this.messageChange(event)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="timeout">Timeout</Label>
                        <Input type="text" name="timeout" id="timeout" onChange={event => this.timeoutChange(event)}/>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="closeable" id="closeable"  onChange={event => this.closeableChange(event)} /> {' '} Closeable
                        </Label>
                    </FormGroup>
                    <Button onClick={this.submitForm}>Submit</Button>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    triggerAlert: alertActionCreators.triggerAlert
}

export default connect(null, mapDispatchToProps)(ErrorGenerator);