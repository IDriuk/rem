NewMem = React.createClass({
  selectNew: function () {
    alert('selectNew');
  },
  render: function () {
    return (
      <div className="col-sm-1" onClick={this.selectNew}>
        <img src="/acts/create.png" />
      </div>
    );
  }
});
