import React from "react";
import NewTicketForm from "./NewTicketForm";
import PropTypes from "prop-types";

class NewTicketControl extends React.Component {

	constructor(props) {
		super(props);
		this.state = {formVisibleOnPage: false};
		this.handleDisplayingNewTicketForm = this.handleDisplayingNewTicketForm.bind(this);
	}

	handleDisplayingNewTicketForm() {
		this.setState({formVisibleOnPage: true});
	}

	render(){
		let formAreaContent=null;
		if(this.state.formVisibleOnPage){
			formAreaContent = <NewTicketForm
								onNewTicketCreation={this.props.onNewTicketCreation}/>;
		} else {
			formAreaContent = <button onClick={this.handleDisplayingNewTicketForm}>Request Help</button>;
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