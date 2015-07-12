MemsContainer = React.createClass({
  render: function () {
    this.displayMemContent = false;
    return (
      <div className="row">
        { this.displayMemContent && <MemContent/> }
        <MemContentEdit/>
      </div>
    );
  }
});
