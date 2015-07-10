ActionsContainer = React.createClass({
  render: function () {
    return (
      <div className="row">
        <NewMem/>
        <EditMem/>
        <SaveMem/>
        <RemoveMem/>
      </div>
    );
  }
});
