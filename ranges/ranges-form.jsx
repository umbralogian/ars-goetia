RangesForm = React.createClass({
  handleRangeSubmit(event){
    event.preventDefault();
    var from = React.findDOMNode(this.refs.fromInput).value.trim();
    var to = React.findDOMNode(this.refs.toInput).value.trim();
    var admin = React.findDOMNode(this.refs.adminInput).value.trim();
    var comment = React.findDOMNode(this.refs.commentInput).value.trim();
    Ranges.insert({
      from: from,
      to: to,
      admin: admin,
      comment: comment
    });
    React.findDOMNode(this.refs.fromInput).value = "";
    React.findDOMNode(this.refs.toInput).value = "";
    React.findDOMNode(this.refs.adminInput).value = "";
    React.findDOMNode(this.refs.commentInput).value = "";
  },
  render(){
    return(
      <form onSubmit={this.handleRangeSubmit}>
        <input type="text" ref="fromInput" placeholder="From" required />
        <input type="text" ref="toInput" placeholder="To" required />
        <input type="text" ref="adminInput" placeholder="Admin" required />
        <input type="text" ref="commentInput" placeholder="Comment" required />
        <button onClick={this.handleRangeSubmit}>&#43;</button>
      </form>
    );
  }
});
