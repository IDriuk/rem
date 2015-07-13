NewMem = React.createClass({
  handleNew: function () {
    alert('handle New');
  },
  render: function () {
    return (
      <div className="col-sm-1" onClick={this.handleNew}>
        <img src="/acts/create.png" />
      </div>
    );
  }
});
