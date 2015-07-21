SaveMem = React.createClass({
  handleSave: function () {
    alert('handle Save');
	var obj = {
	  name: $('#newname').val(),
	  content: $('#newcontent').val(),
	  freq: Session.get('selected_freq'),
	  tech: Session.get('selected_tech'),
	};
	
	this.props.handleSave(obj);
	
	// Meteor.call('saveMem', obj);
  },
  render: function() {
    return (
      <div className="col-sm-1" onClick={this.handleSave}>
        <img src="/acts/save.png" />
      </div>
    );
  }
});
