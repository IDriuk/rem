ActionsContainer = React.createClass({
  render: function () {
    return (
      <div className="row">
        <NewMem handleNew={this.props.handleNew} />
        <EditMem handleEdit={this.props.handleEdit} />
        <SaveMem handleSave={this.props.handleSave}/>
        <RemoveMem handleDelete={this.props.handleDelete} />
      </div>
    );
  }
});
