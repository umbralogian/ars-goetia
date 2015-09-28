AdminsLayout = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return{
      admins: Admins.find({}, {sort: {department: 1}}).fetch(),
      adminCount: Admins.find({}).count()
    }
  },
  renderHeader(){
    return <Header />
  },
  renderAdminsHead(){
    return <AdminsHead />
  },
  renderAdmins(){
    return this.data.admins.map((admin) => {
      return <Admin key={admin._id} admin={admin} />;
    });
  },
  renderAdminsForm(){
    return <AdminsForm />
  },
  render(){
    return(
      <div className="container">
        {this.renderHeader()}
        <h2>{this.data.adminCount} Admins</h2>
        <table>
          <thead>
            {this.renderAdminsHead()}
          </thead>
          <tbody>
            {this.renderAdmins()}
          </tbody>
        </table>
        <footer>
          {this.renderAdminsForm()}
        </footer>
      </div>
    );
  }
});
