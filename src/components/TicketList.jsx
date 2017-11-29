import React from "react";
import Ticket from "./Ticket"

function TicketList() {
	return(
		<Ticket
			location="G3"
			names="Devin and Devon"
			issue="Bootstrap won't fire up correctly" />
	);
}

export default TicketList;