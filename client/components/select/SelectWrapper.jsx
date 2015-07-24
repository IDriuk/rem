SelectWrapper = React.createClass({
  handleClick: function (name) {
	this.props.handleSelect(name);
  },
  render: function() {
    return (
      <div className="col-sm-4">
        <TechContainer/>
        <FreqContainer/>
		<ActContainer/>
        <NamesContainer 
			mems={this.props.mems}
			onClick = {this.handleClick}
		/>
      </div>
    );
  }
});
