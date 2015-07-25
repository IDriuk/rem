var Main = ReactMeteor.createClass({
  templateName: 'Main',

  startMeteorSubscriptions: function(){
    Meteor.subscribe('mems');
  },

  getMeteorState: function(){

    if (!Session.get('mode')) {
      Session.set('mode', 'view');
    }
    if (!Session.get('tech')) {
      Session.set('tech', []);
    }
    if (!Session.get('freq')) {
      Session.set('freq', []);
    }

    var query = {
      tech: {$in: Session.get('tech')},
      freq: {$in: Session.get('freq')}
    };

    var search = Session.get('search');
    if (search && search.length > 0) {
      var name = {$regex: ('^' + search)};
      query.name = name;
    }

    return {
	     mems: Mems.find(query).fetch(),
       mode: Session.get('mode'),
       tech: Session.get('tech'),
       freq: Session.get('freq')
	  };
  },

  selectTech: function() {
    this.setState({
      tech: Session.get('tech')
    });
  },

  selectFreq: function() {
    this.setState({
      freq: Session.get('freq')
    });
  },

  selectName: function(name) {
    this.setMode('view');
  	this.setState({
  		mem: Mems.findOne({name: name})
  	});
  },

  setMode: function(mode) {
    Session.set('mode', mode);
    Session.set('tech', []);
    Session.set('freq', []);

    this.setState({
      mode: Session.get('mode')
    });
  },

  searchMem: function() {
    this.setState({
      search: Session.get('search')
    })
  },

  render: function() {
    return (
              <div className="container">
                <div className="row">
                  <SelectWrapper
                    mems = {this.state.mems}
                    tech = {this.state.tech}
                    freq = {this.state.freq}
                    mode = {this.state.mode}
                    setMode = {this.setMode}
                    selectName = {this.selectName}
                    selectFreq = {this.selectFreq}
                    selectTech = {this.selectTech}
                    searchMem = {this.searchMem}
					        />
                  <MemsContainer
                    mode = {this.state.mode}
                    mem = {this.state.mem}
                  />
                </div>
              </div>
            );
  }
});
