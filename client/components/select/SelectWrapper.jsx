SelectWrapper = React.createClass({
  render: function() {
    return (
      <div className="col-sm-4">
        <TechContainer/>
        <FreqContainer/>
        <NamesContainer mems={this.props.mems} />
      </div>
    );
  }
});
