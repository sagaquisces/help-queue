import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

function Ticket(props) {
    const timeSinceOpened = new Moment().to(props.timeOpened);
    return(
        <div className="well">
            <h3>{props.location}</h3>
            <h3>{props.names}</h3>
            <p><em>{props.issue}</em></p>
            <p>{timeSinceOpened}</p>
        </div>
    );
}

Ticket.propTypes = {
    names: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    timeOpened: PropTypes.number.isRequired,
    issue: PropTypes.string
};

export default Ticket;