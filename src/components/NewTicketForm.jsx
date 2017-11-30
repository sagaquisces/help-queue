import React from "react";
import Ticket from "../models/ticket.js";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";

class NewTicketForm extends React.Component {

	constructor(props){
		super(props);
		this.handleNewTicketFormSubmission = this.handleNewTicketFormSubmission.bind(this);
	}

	handleNewTicketFormSubmission(e) {
		e.preventDefault();
		const { _names, _location, _issue } = this.refs;
		var newTicket = new Ticket(_names.value, _location.value, _issue.value);
		this.props.onNewTicketCreation(newTicket);
		this.props.hideFormAfterSubmission();
	}

	render(){
		return (
			<div>
				<form onSubmit={this.handleNewTicketFormSubmission}>
					<input
						ref="_names"
						type="text"
						id="names"
						placeholder="Pair Names" />
					<input
						ref="_location"
						type="text"
						id="location"
						placeholder="Location" />
					<textarea
						ref="_issue"
						type="text"
						id="issue"
						placeholder="Describe your issue." />
					<Button block bsStyle="primary" bsSize="large" type="submit">Help!</Button>
				</form>
			</div>
		);
	}
}

NewTicketForm.propTypes = {
	onNewTicketCreation: PropTypes.func,
	hideFormAfterSubmission : PropTypes.func
}

export default NewTicketForm;