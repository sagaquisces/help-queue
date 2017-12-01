import React from "react";
import ReactDOM from "react-dom";
import Ticket from "../models/ticket.js";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

class NewTicketForm extends React.Component {

    constructor(props){
        super(props);
        console.log(props);
        this.handleNewTicketFormSubmission = this.handleNewTicketFormSubmission.bind(this);
    }

    handleNewTicketFormSubmission(e) {
        e.preventDefault();
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

export default NewTicketForm;