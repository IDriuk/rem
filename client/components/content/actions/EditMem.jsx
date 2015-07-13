EditMem = React.createClass({
  selectEdit: function () {
    alert('selectEdit');
  },
  render: function () {
    return (
      <div className="col-sm-1" onClick={this.selectEdit} >
        <img src="/acts/edit.png" />
      </div>
    );
  }
});
