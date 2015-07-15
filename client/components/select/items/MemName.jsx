MemName = React.createClass({
  render: function () {
    return (
      <div className="col-sm-12" onClick={this.props.onClick}>
        <span className="alert-info">{this.props.name}</span>
      </div>
    );
  }
});
