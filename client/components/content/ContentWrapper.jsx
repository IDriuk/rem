ContentWrapper = React.createClass({
  handleDelete: function() {
	console.log(this.props.mem);
	Meteor.call('removeMem', this.props.mem);
  },
  render: function () {
    return (
      <div className="col-sm-8">
        <MemsContainer  
			mem={this.props.mem}
			edit={this.props.edit}
			/>
        <ActionsContainer 
			handleEdit={this.props.handleEdit}
			handleNew={this.props.handleNew}
			handleDelete={this.handleDelete}
			/>
      </div>
    );
  }
});
