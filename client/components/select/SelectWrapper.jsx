SelectWrapper = React.createClass({
  render: function() {
    return (
      <div className="col-sm-4">
        <TechContainer/>
        <FreqContainer/>
        <SortContainer/>
        <NamesContainer/>
      </div>
    );
  }
});
