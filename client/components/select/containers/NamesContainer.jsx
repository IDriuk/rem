NamesContainer = React.createClass({
  renderName: function(mem) {
    return (
			<MemName name={mem.name} />
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
