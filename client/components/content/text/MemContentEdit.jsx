MemContentEdit = React.createClass({
  render: function () {
	console.log('name');
	console.log(this.props.mem);
	
	if (this.props.mem) {
		var name = this.props.mem.name;
		var content = this.props.mem.content;
	} else {
		var name = "no name specified";
		var content = "no content specified";
	}
  
    return (
      <div className="col-sm-12">
        <input className="form-control" placeholder={name} id="newname" ></input>
        <textarea className="form-control" placeholder="content" rows="20" id="newcontent"  >{content}</textarea>
      </div>
    );
  }
})
