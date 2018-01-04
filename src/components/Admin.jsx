import React from "react"
import TicketList from "./TicketList"
import PropTypes from "prop-types"
import c from "./../constants"
import {connect} from "react-redux"

class Admin extends React.Component {
  constructor(props){
    super(props)
    this.handleClosingTicket = this.handleClosingTicket.bind(this)
  }
  handleClosingTicket(ticketId){
    const { dispatch } = this.props
    const action = {
      type: c.CLOSE_TICKET,
      ticketId: ticketId,
    }
    dispatch(action)
  }

  render(){
    return (
      <div>
        <h3>Admin page.</h3>
        <TicketList
          ticketList = {this.props.adminMasterTicketList}
          currentRoute = {this.props.location.pathname}
          handleClosingTicket = {this.handleClosingTicket}
        />
      </div>
    )
  }
}

Admin.propTypes = {
  dispatch: PropTypes.func,
  adminMasterTicketList: PropTypes.array,
  location: PropTypes.object,
  handleClosingTicket: PropTypes.func
}

const mapStateToProps = state => {
  return {
    adminMasterTicketList : state
  }
}

export default connect(mapStateToProps)(Admin)
