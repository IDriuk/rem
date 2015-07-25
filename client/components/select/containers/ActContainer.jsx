ActContainer = React.createClass({

  createMem: function () {
    var name = $('#newname').val();
    var content = $('#newcontent').val();
    Meteor.call('createMem', {
      name: name,
      content: content,
      tech: Session.get('tech')[0] || 'js',
      freq: Session.get('freq')[0] || 'often'
    });
  },

  updateMem: function () {
    var name = $('#newname').val();
    var content = $('#newcontent').val();
    var mem = this.props.mem;
    if (mem) {
      Meteor.call('updateMem', mem._id, {
        name: name,
        content: content,
        tech: Session.get('tech')[0] || 'js',
        freq: Session.get('freq')[0] || 'often'
      });
    }
  },

  deleteMem: function () {
    if (this.props.mem) {
      Meteor.call('removeMem', this.props.mem);
    }
  },

  setMode: function (act) {
    if (act == 'create') {
      this.props.setMode('create');
    } else if (act == "edit") {
      this.props.setMode('edit');
    } else if (act == "save"){
      if (this.props.mode == "create") {
        this.createMem();
      }
      if (this.props.mode == "edit") {
        this.updateMem();
      }
      //this.props.setMode('view');
    } else {
      this.deleteMem();
      this.props.setMode('view');
    }
  },

  renderAct: function (act) {
    var mem = this.props.mem;
    var display = "none";

    if (mem && (act == 'edit' || act == "delete")
                    && this.props.mode == 'view') {
      display = "block";
    }
    if (act == 'create' && this.props.mode == "view") {
      display = "block";
    }
    if (act == 'save'
        && (this.props.mode == "create" || this.props.mode == "edit")) {
      display = "block";
    }

    return (
  		<Act
  			key={act}
  			src={"/acts/" + act + ".png"}
        setMode={this.setMode.bind(this, act)}
        display={display}
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
        <div className="col-sm-6">
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
