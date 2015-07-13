RemoveMem = React.createClass({
  handleRemove: function () {
    alert('handle Remove');
  },
  render: function () {
    return (
      <div className="col-sm-1 col-sm-offset-1" onClick={this.handleRemove}>
        <img src="acts/delete.png" />
      </div>
    );
  }
});
