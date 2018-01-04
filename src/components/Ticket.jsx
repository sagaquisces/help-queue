import React from "react"
import PropTypes from "prop-types"
import Moment from "moment"
import { Button } from "react-bootstrap"

const Ticket = ({
  names,
  location,
  timeOpened,
  id,
  issue,
  currentRoute,
  handleClosingTicket
}) => {
  const timeSinceOpened = new Moment().to(timeOpened)
  let ticketDetails =
    <div>
      <h3>{location}</h3>
      <h3>{names}</h3>
      <p><em>{issue}</em></p>
      <p>{timeSinceOpened}</p>
    </div>

  if (currentRoute === "/admin") {
    return (
      <div className="well">
        {ticketDetails}
        <Button onClick={() => { handleClosingTicket(id) }}>
          Close Ticket
        </Button>
      </div>
    )
  } else {
    return (
      <div className="well">
        {ticketDetails}
      </div>
    )
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
}

export default Ticket
