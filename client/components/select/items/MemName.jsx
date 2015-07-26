MemName = React.createClass({
  render: function () {
    return (
      <div className="col-sm-12" onClick={this.props.selectName}>
        <span className="btn btn-default btn-xs"
              style={{cursor: 'pointer',
                      marginBottom: 3}}>{this.props.name}</span>
      </div>
    );
  }
});
