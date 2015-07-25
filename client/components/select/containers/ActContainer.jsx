ActContainer = React.createClass({

  setMode: function (act) {
    if (act == 'create') {
      this.props.setMode('create');
    } else if (act == "edit") {
      this.props.setMode('edit');
    } else {
      this.props.setMode('view');
    }
  },

  renderAct: function (act) {
    return (
  		<Act
  			key={act}
  			src={"/acts/" + act + ".png"}
        setMode={this.setMode.bind(this, act)}
  		/>
	  );
  },

  searchMem: function () {
    var search = this.refs.search.getDOMNode().value;
    Session.set('search', search);
    this.props.searchMem();
  },

  render: function () {
	var acts = ["create", "edit", "save", "delete"];
    return (
      <div className="row">
        <div className="col-sm-4">
          <input className="form-control" type="text"
                 placeholder="search"
                 ref="search"
                 onChange = {this.searchMem}
                 ></input>
        </div>
		    {acts.map(this.renderAct)}
      </div>
    );
  }
});
