import React from "react";
import TicketList from "./TicketList";
import NewTicketControl from "./NewTicketControl";

class Queue extends React.Component {
	constructor (props){
		super(props);
		this.state = {

		};
	}

	render(){
		return(
			<div>
				<TicketList />
				<NewTicketControl />
			</div>
		);
	}
}

export default Queue;