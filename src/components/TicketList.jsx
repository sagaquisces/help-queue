import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

function TicketList(props) {
    return(
        <div>
            <hr/>
            {props.ticketList.map((ticket, index) =>
                <Ticket
                    location={ticket.location}
                    names={ticket.names}
                    issue={ticket.issue}
                    timeOpened={ticket.timeOpened}
                    key={ticket.id} />
            )}
        </div>
    );
}

TicketList.propTypes = {
    ticketList: PropTypes.array.isRequired
};

export default TicketList;