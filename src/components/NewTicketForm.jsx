import React from "react";
import ReactDOM from "react-dom";
import Ticket from "../models/ticket.js";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import c from './../constants';

import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

class NewTicketForm extends React.Component {

    constructor(props){
        super(props);
        this.handleNewTicketFormSubmission = this.handleNewTicketFormSubmission.bind(this);
    }

    handleNewTicketFormSubmission(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const action = {
            type: c.ADD_TICKET,
            id: null,
            names: ReactDOM.findDOMNode(this._names).value,
            location: ReactDOM.findDOMNode(this._location).value,
            issue: ReactDOM.findDOMNode(this._issue).value,
            timeOpened: new Date().getTime()
        }
        dispatch(action);
        var newTicket = new Ticket(ReactDOM.findDOMNode(this._names).value, ReactDOM.findDOMNode(this._location).value, ReactDOM.findDOMNode(this._issue).value);
        this.props.onNewTicketCreation(newTicket);
        this.props.hideFormAfterSubmission();
    }

    render(){
        return (
            <div>
                <Form onSubmit={this.handleNewTicketFormSubmission}>

                    <FormGroup>
                        <FormControl
                            inputRef={ref => { this._names = ref; }}
                            type="text"
                            id="names"
                            placeholder="Pair Names" />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            inputRef={ref => { this._location = ref; }}
                            type="text"
                            id="location"
                            placeholder="Location" />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            inputRef={ref => { this._issue = ref;}}
                            componentClass="textarea"
                            type="text"
                            id="issue"
                            placeholder="Describe your issue." />
                    </FormGroup>
                    <Button bsStyle="warning" type="submit">Help!</Button>
                </Form>
            </div>
        );
    }
}

NewTicketForm.propTypes = {
    onNewTicketCreation: PropTypes.func,
    hideFormAfterSubmission : PropTypes.func
};

NewTicketForm = connect()(NewTicketForm);

export default NewTicketForm;