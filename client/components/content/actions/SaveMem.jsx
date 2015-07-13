SaveMem = React.createClass({
  selectSave: function () {
    alert('select Save');
  },
  render: function() {
    return (
      <div className="col-sm-1" onClick={this.selectSave}>
        <img src="/acts/save.png" />
      </div>
    );
  }
});
