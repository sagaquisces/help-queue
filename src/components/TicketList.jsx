import React from "react"
import Ticket from "./Ticket"
import PropTypes from "prop-types"

const TicketList = ({
  ticketList,
  currentRoute,
  handleClosingTicket
}) => {
  return(
    <div>
      <hr/>
      {ticketList.map((ticket) =>
        <Ticket
          location={ticket.location}
          names={ticket.names}
          issue={ticket.issue}
          timeOpened={ticket.timeOpened}
          key={ticket.id}
          id={ticket.id}
          currentRoute={currentRoute}
          handleClosingTicket={handleClosingTicket}/>
      )}
    </div>
  )
}

TicketList.propTypes = {
  ticketList: PropTypes.array.isRequired,
  currentRoute: PropTypes.string,
  handleClosingTicket: PropTypes.func
}

export default TicketList
