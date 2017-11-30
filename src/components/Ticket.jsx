import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
	return(
		<div className="well">
			<h3>{props.location}</h3>
			<h3>{props.names}</h3>
			<p><em>{props.issue}</em></p>
		</div>
	);
}

Ticket.propTypes = {
	names: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	issue: PropTypes.string
};

export default Ticket;