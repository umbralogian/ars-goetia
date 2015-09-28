Admin = React.createClass({
  propTypes: {
    admin: React.PropTypes.object.isRequired
  },
  handleAdminDelete(){
    Admins.remove(this.props.admin._id);
  },
  render(){
    return(
      <tr>
        <td>{this.props.admin.name}</td>
        <td>{this.props.admin.department}</td>
        <td>{this.props.admin.email}</td>
        <td>{this.props.admin.phone}</td>
        <td><button>&#63;</button></td>
        <td><button onClick={this.handleAdminDelete}>&times;</button></td>
      </tr>
    );
  }
});
