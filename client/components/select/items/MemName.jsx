MemName = React.createClass({
  render: function () {
    return (
      <div className="col-sm-12">
        <span className="alert-info">{this.props.name}</span>
      </div>
    );
  }
});
