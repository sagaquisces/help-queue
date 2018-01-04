import React from "react"
import TicketList from "./TicketList"
import NewTicketControl from "./NewTicketControl"
import PropTypes from "prop-types"
import {connect} from "react-redux"

class Queue extends React.Component {
  constructor (props){
    super(props)
    this.updateTicketTimeSinceOpened = this.updateTicketTimeSinceOpened.bind(this)
  }

  componentDidMount() {
    this.timeSinceOpenedChecker = setInterval(() =>
      this.updateTicketTimeSinceOpened(), 5000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timeSinceOpenedChecker)
  }

  updateTicketTimeSinceOpened() {
    this.forceUpdate()
  }

  render(){
    return(
      <div>
        <TicketList
          ticketList = {this.props.masterTicketList}
        />
        <NewTicketControl />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    masterTicketList : state
  }
}

Queue.propTypes = {
  masterTicketList: PropTypes.array
}

export default connect(mapStateToProps)(Queue)
