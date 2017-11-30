import React from "react";
import Ticket from "./Ticket"
import PropTypes from 'prop-types';

function TicketList(props) {
	console.log(props.ticketList);
	return(
		<div>
			<hr/>
			{props.ticketList.map((ticket, index) =>
				<Ticket
					location={ticket.location}
					names={ticket.names}
					issue={ticket.issue}
					key={index} />
			)}
		</div>
	);
}

TicketList.propTypes = {
	tickeList: PropTypes.array
}

export default TicketList;