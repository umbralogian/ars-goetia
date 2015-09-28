TicketsLayout = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return{
      tickets: Tickets.find({}, {sort: {address: 1}}).fetch(),
      ticketCount: Tickets.find({}).count()
    }
  },
  getInitialState(){
    return {showTicketsForm: false};
  },
  toggleTicketsForm(){
    this.setState({showTicketsForm: true});
  },
  renderHeader(){
    return <Header />
  },
  renderTicketsHead(){
    return <TicketsHead />
  },
  renderTickets(){
    return this.data.tickets.map((ticket) => {
      return <Ticket key={ticket._id} ticket={ticket} />;
    });
  },
  toggleTicketForm(){

  },
  render(){
    return(
      <div className="container">
        {this.renderHeader()}
        <h2>{this.data.ticketCount} Tickets</h2>
        <h3><input type="checkbox" /> Show Completed Tickets</h3>
        <table>
          <thead>
            {this.renderTicketsHead()}
          </thead>
          <tbody>
            {this.renderTickets()}
          </tbody>
        </table>
        <button onClick={this.toggleTicketForm}>&#43;</button>
        {this.state.showTicketsForm ? <TicketsForm /> : null}
      </div>
    );
  }
});
