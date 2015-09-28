RangesLayout = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return{
      ranges: Ranges.find({}, {sort: {from: 1}}).fetch(),
      rangeCount: Ranges.find({}).count()
    }
  },
  renderHeader(){
    return <Header />
  },
  renderRangesHead(){
    return <RangesHead />
  },
  renderRanges(){
    return this.data.ranges.map((range) => {
      return <Range key={range._id} range={range} />;
    });
  },
  renderRangesForm(){
    return <RangesForm />
  },
  render(){
    return(
      <div className="container">
        {this.renderHeader()}
        <h2>{this.data.rangeCount} Ranges</h2>
        <table>
          <thead>
            {this.renderRangesHead()}
          </thead>
          <tbody>
            {this.renderRanges()}
          </tbody>
        </table>
        <footer>
          {this.renderRangesForm()}
        </footer>
      </div>
    );
  }
});
