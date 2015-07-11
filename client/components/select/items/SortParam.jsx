SortParam = React.createClass({
  render: function () {
    return (
      <div className="col-sm-3">
        <button className="btn btn-default">{this.props.sortParam}</button>
      </div>
    );
  }
});
