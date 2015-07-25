ViewContent = React.createClass({
  render: function () {
    var name = this.props.mem ? this.props.mem.name : '';
    var content = this.props.mem ? this.props.mem.content : '';
    return (
      <div className="col-sm-12">
		      <label>{name}</label>
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: marked(content, {sanitize: true})
            }}
          />
	   </div>
    );
  }
});
