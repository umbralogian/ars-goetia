TicketsForm = React.createClass({
  handleTicketSubmit(event){
    event.preventDefault();
    var adress = React.findDOMNode(this.refs.addressInput).value.trim();
    var date = React.findDOMNode(this.refs.dateInput).value.trim();
    var admin = React.findDOMNode(this.refs.adminInput).value.trim();
    var comment = React.findDOMNode(this.refs.commentInput).value.trim();
    Tickets.insert({
      address: address,
      date: date,
      admin: admin,
      comment: comment,
      modified: new Date()
    });
    React.findDOMNode(this.refs.addressInput).value = "";
    React.findDOMNode(this.refs.dateInput).value = "";
    React.findDOMNode(this.refs.adminInput).value = "";
    React.findDOMNode(this.refs.commentInput).value = "";
  },
  render(){
    return(
      <form onSubmit={this.handleTicketSubmit}>
        <input type="text" ref="addressInput" placeholder="Address" required />
        <input type="text" ref="dateInput" placeholder="Date" required />
        <input type="text" ref="adminInput" placeholder="Admin" required />
        <input type="text" ref="commentInput" placeholder="Comment" required />
        <button onClick={this.handleTicketSubmit}>&#43;</button>
      </form>
    );
  }
});
