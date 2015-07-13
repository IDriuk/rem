SaveMem = React.createClass({
  handleSave: function () {
    alert('handle Save');
  },
  render: function() {
    return (
      <div className="col-sm-1" onClick={this.handleSave}>
        <img src="/acts/save.png" />
      </div>
    );
  }
});
