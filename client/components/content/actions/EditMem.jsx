EditMem = React.createClass({
  handleEdit: function () {
    alert('handle Edit');
  },
  render: function () {
    return (
      <div className="col-sm-1" onClick={this.handleEdit} >
        <img src="/acts/edit.png" />
      </div>
    );
  }
});
