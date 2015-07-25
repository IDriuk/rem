MemsContainer = React.createClass({
  render: function () {
    return (
      <div className="col-sm-8">
        {this.props.mode == 'view' && <ViewContent mem = {this.props.mem} mode = {this.props.mode} />}
        {this.props.mode != 'view' && <EditContent mem = {this.props.mem} mode = {this.props.mode} />}
      </div>
    );
  }
});
