Range = React.createClass({
  propTypes: {
    range: React.PropTypes.object.isRequired
  },
  handleRangeDelete(){
    Ranges.remove(this.props.range._id);
  },
  render(){
    return(
      <tr>
        <td>{this.props.range.from}</td>
        <td>&mdash;</td>
        <td>{this.props.range.to}</td>
        <td>{this.props.range.admin}</td>
        <td>{this.props.range.comment}</td>
        <td><button>&#63;</button></td>
        <td><button onClick={this.handleRangeDelete}>&times;</button></td>
      </tr>
    );
  }
});
