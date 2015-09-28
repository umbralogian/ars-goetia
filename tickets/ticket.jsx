Ticket = React.createClass({
  propTypes: {
    ticket: React.PropTypes.object.isRequired
  },
  handleTicketDelete(){
    Tickets.remove(this.props.ticket._id);
  },
  render(){
    return(
      <tr>
        <td><input type="checkbox" /></td>
        <td>{this.props.ticket._id}</td>
        <td>{this.props.ticket.address}</td>
        <td>{this.props.ticket.date}</td>
        <td>{this.props.ticket.admin}</td>
        <td>{this.props.ticket.comment}</td>
        <td>{this.props.ticket.modified}</td>
        <td><button>&#63;</button></td>
        <td><button onClick={this.handleTocletDelete}>&times;</button></td>
      </tr>
    );
  }
});
