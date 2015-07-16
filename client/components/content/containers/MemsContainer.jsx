MemsContainer = React.createClass({
  render: function () {
  
    return (
      <div className="row">
        { this.props.mem && <MemContent
			mem={this.props.mem}
		/> }
        { !this.props.mem && <MemContentEdit/> }
      </div>
    );
  }
});
