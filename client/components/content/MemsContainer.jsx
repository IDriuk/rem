MemsContainer = React.createClass({
  render: function () {
  
    return (
      <div className="row">
        { (this.props.mem && !this.props.edit) && <MemContent
			mem={this.props.mem}
		/> }
        { (!this.props.mem || this.props.edit) && <MemContentEdit
			mem={this.props.mem}
		/> }
      </div>
    );
  }
});
