EditMem = React.createClass({
  handleEdit: function () {
    alert('handle Edit');
	var obj = {
	  selected_freq: Session.get('selected_freq'),
	  selected_tech: Session.get('selected_tech')
	};
	Meteor.call('editMem', obj);
	this.props.handleEdit();
  },
  render: function () {
    return (
      <div className="col-sm-1" onClick={this.handleEdit} >
        <img src="/acts/edit.png" />
      </div>
    );
  }
});
