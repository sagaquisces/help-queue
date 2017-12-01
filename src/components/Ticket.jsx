import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import { Button } from "react-bootstrap";

function Ticket(props) {
    const timeSinceOpened = new Moment().to(props.timeOpened);
    let ticketDetails = 
        <div>
            <h3>{props.location}</h3>
            <h3>{props.names}</h3>
            <p><em>{props.issue}</em></p>
            <p>{timeSinceOpened}</p>
        </div>


    if (props.currentRoute === "/admin") {
        return (
            <div className="well">
                {ticketDetails}
                <Button onClick={() => { props.handleClosingTicket(props.id) }}>Close Ticket</Button>
            </div>
        );
    } else {
        return (
            <div className="well">
                {ticketDetails}
            </div>
        );
    }
}

Ticket.propTypes = {
    names: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    timeOpened: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    issue: PropTypes.string,
    currentRoute: PropTypes.string,
    handleClosingTicket: PropTypes.func
};

export default Ticket;