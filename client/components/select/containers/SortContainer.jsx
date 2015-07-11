SortContainer = React.createClass({
  renderParam: function(param) {
    return <SortParam
              sortParam={param}
            />
  },
  render: function() {
    var params = ["name", "update", "create"]
    return (
              <div className="row">
                {params.map(this.renderParam)}
              </div>
          );
  }
});
