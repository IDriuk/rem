ViewContent = React.createClass({
  render: function () {
    var name = this.props.mem ? this.props.mem.name : '';
    var content = this.props.mem ? this.props.mem.content : '';
    return (
      <div className="col-sm-12">
		      <label>{name}</label>
		      <p>{content}</p>
	   </div>
    );
  }
});
