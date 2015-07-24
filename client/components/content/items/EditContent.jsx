MemContentEdit = React.createClass({
  getInitialState: function() {
    if (this.props.mem) {
		name = this.props.mem.name;
		content = this.props.mem.content;
	} else {
		name = "no name specified";
		content = "no content specified";
	}
	
	return {name: name, content: content};
  },
  handleChange: function (e) {
    this.setState({
		name: e.target.value
	});
  },
  render: function () {
    return (
      <div className="col-sm-12">
        <input className="form-control" placeholder={this.state.name} value={this.state.name} id="newname" onChange={this.handleChange}></input>
        <textarea className="form-control" placeholder="content" rows="20" id="newcontent"  defaultValue={this.state.content} ></textarea>
      </div>
    );
  }
})
