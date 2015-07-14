RemoveMem = React.createClass({
  handleRemove: function () {
    alert('handle Remove');
	var obj = {
	  selected_freq: Session.get('selected_freq'),
	  selected_tech: Session.get('selected_tech')
	};
	Meteor.call('removeMem', obj);
  },
  render: function () {
    return (
      <div className="col-sm-1 col-sm-offset-1" onClick={this.handleRemove}>
        <img src="acts/delete.png" />
      </div>
    );
  }
});
