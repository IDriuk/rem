SaveMem = React.createClass({
  handleSave: function () {
    alert('handle Save');
	var obj = {
	  selected_freq: Session.get('selected_freq'),
	  selected_tech: Session.get('selected_tech')
	};
	Meteor.call('saveMem', obj);
  },
  render: function() {
    return (
      <div className="col-sm-1" onClick={this.handleSave}>
        <img src="/acts/save.png" />
      </div>
    );
  }
});
