ActContainer = React.createClass({

  renderAct: function (act) {
    return (
		<Act 
			key={act}
			src={"/acts/" + act + ".png"}
		/>
	);
  },

  render: function () {
	var acts = ["create", "delete", "edit", "save"];
    return (
      <div className="row">
		{acts.map(this.renderAct)}
      </div>
    );
  }
});
