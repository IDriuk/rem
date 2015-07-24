MemContent = React.createClass({
  render: function () {
    return (
      <div className="col-sm-12">
		<label>Name </label>
		<p>{this.props.mem.name}</p>
		<label>Content </label>
		<p>{this.props.mem.content}</p>
	  </div>
    );
  }
});
