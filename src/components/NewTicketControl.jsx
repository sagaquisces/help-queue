import React from "react";

class NewTicketControl extends React.Component {

	constructor(props) {
		super(props);
		this.state = {formVisibleOnPage: false};
		this.handleDisplayingNewTicketForm = this.handleDisplayingNewTicketForm.bind(this);
		console.log(this);
	}

	handleDisplayingNewTicketForm(e) {
		this.setState({formVisibleOnPage: true});
		console.log(this);
	}

	render(){
		return (
			<button onClick={this.handleDisplayingNewTicketForm}>Request Help</button>
		);
	}
}

export default NewTicketControl;