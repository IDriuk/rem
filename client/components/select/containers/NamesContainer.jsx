NamesContainer = React.createClass({
  selectName: function(name) {
	   this.props.selectName(name);
  },
  renderName: function(mem) {
    return (
			<MemName
				key={mem._id}
				name={mem.name}
				selectName = {this.selectName.bind(this, mem.name)}
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
