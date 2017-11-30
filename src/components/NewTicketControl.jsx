import React from "react";
import NewTicketForm from "./NewTicketForm";
import PropTypes from "prop-types";

class NewTicketControl extends React.Component {

	constructor(props) {
		super(props);
		this.state = {formVisibleOnPage: false};
		this.showForm = this.showForm.bind(this);
		this.hideForm = this.hideForm.bind(this);
	}

	showForm() {
		this.setState({formVisibleOnPage: true});
	}

	hideForm() {
		this.setState({formVisibleOnPage: false});
	}

	render(){
		let formAreaContent=null;
		if(this.state.formVisibleOnPage){
			formAreaContent = <NewTicketForm
								onNewTicketCreation={this.props.onNewTicketCreation}
								hideFormAfterSubmission = {this.hideForm}/>;
		} else {
			formAreaContent = <button onClick={this.showForm}>Request Help</button>;
		}
		return (
			<div>
				{formAreaContent}
			</div>
		);
	}
}

NewTicketForm.PropTypes = {
	onNewTicketCreation: PropTypes.func
}

export default NewTicketControl;