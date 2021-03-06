export default (state = [], action) => {
  switch (action.type) {
  case "ADD_TICKET": {
    const { names, location, issue, timeOpened, id } = action
    return [
      ...state,
      {
        names: names,
        location: location,
        issue: issue,
        timeOpened: timeOpened,
        id: id
      }
    ]
  }
  case "CLOSE_TICKET": {
    const updatedTicketList = state.filter(ticket => ticket.id !== action.ticketId)
    return updatedTicketList
  }
  default:
    return state
  }
}
