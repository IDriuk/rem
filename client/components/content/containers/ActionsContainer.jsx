ActionsContainer = React.createClass({
  render: function () {
    return (
      <div className="row">
        <NewMem handleNew={this.props.handleNew} />
        <EditMem handleEdit={this.props.handleEdit} />
        <SaveMem/>
        <RemoveMem handleDelete={this.props.handleDelete} />
      </div>
    );
  }
});
