RemoveMem = React.createClass({
  selectRemove: function () {
    alert('selectRemove');
  },
  render: function () {
    return (
      <div className="col-sm-1 col-sm-offset-1" onClick={this.selectRemove}>
        <img src="acts/delete.png" />
      </div>
    );
  }
});
