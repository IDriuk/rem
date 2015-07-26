MemName = React.createClass({
  render: function () {
    return (
      <div className="col-sm-12" onClick={this.props.selectName}>
        <span className="alert-info"
              style={{cursor: 'pointer'}}>{this.props.name}</span>
      </div>
    );
  }
});
