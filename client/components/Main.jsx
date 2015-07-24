var Main = ReactMeteor.createClass({
  templateName: 'Main',
  
  startMeteorSubscriptions: function(){
	Meteor.subscribe('mems');
  },
  
  getMeteorState: function(){
	var query = {};
	
    return {
	  mems: Mems.find(query).fetch(),
	  mode: Session.get('mode')
	};
  },
  
  handleSelect: function(name) {
	this.setState({
		mem: Mems.findOne({name: name}),
		edit: false
	});
  },
  render: function() {
    return (
              <div className="container">
                <div className="row">
                  <SelectWrapper 
					mems={this.state.mems} 
					handleSelect = {this.handleSelect}
					/>
                  <ContentWrapper />
                </div> 
              </div>
            );
  }
});
