NamesContainer = React.createClass({
  handleClick: function(name) {
	this.props.onClick(name);
  },
  renderName: function(mem) {
    return (
			<MemName
				key={mem._id}
				name={mem.name}
				onClick = {this.handleClick.bind(this, mem.name)}
				/>
	);
  },
  render: function() {
    return (
            <div className="row">
              {this.props.mems.map(this.renderName)}
            </div>
          );
  }
});
