NewMem = React.createClass({
  handleNew: function () {
    alert('handle New');
	var obj = {
	  selected_freq: Session.get('selected_freq'),
	  selected_tech: Session.get('selected_tech')
	};
	Meteor.call('newMem', obj);
  },
  render: function () {
    return (
      <div className="col-sm-1" onClick={this.handleNew}>
        <img src="/acts/create.png" />
      </div>
    );
  }
});
