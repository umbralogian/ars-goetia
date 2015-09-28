AdminsForm = React.createClass({
  handleAdminSubmit(event){
    event.preventDefault();
    var name = React.findDOMNode(this.refs.nameInput).value.trim();
    var department = React.findDOMNode(this.refs.departmentInput).value.trim();
    var email = React.findDOMNode(this.refs.emailInput).value.trim();
    var phone = React.findDOMNode(this.refs.phoneInput).value.trim();
    Admins.insert({
      name: name,
      department: department,
      email: email,
      phone: phone
    });
    React.findDOMNode(this.refs.nameInput).value = "";
    React.findDOMNode(this.refs.departmentInput).value = "";
    React.findDOMNode(this.refs.emailInput).value = "";
    React.findDOMNode(this.refs.phoneInput).value = "";
  },
  render(){
    return(
      <form onSubmit={this.handleAdminSubmit}>
        <input type="text" ref="nameInput" placeholder="Name" required />
        <input type="text" ref="departmentInput" placeholder="Department" required />
        <input type="text" ref="emailInput" placeholder="Email" required />
        <input type="text" ref="phoneInput" placeholder="Phone" required />
        <button onClick={this.handleAdminSubmit}>&#43;</button>
      </form>
    );
  }
});
