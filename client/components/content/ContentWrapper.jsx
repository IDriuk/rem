ContentWrapper = React.createClass({
  render: function () {
    return (
      <div className="col-sm-8">
        <MemsContainer  mem={this.props.mem}/>
        <ActionsContainer />
      </div>
    );
  }
});
