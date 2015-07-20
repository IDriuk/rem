var Main = ReactMeteor.createClass({
  templateName: 'Main',
  startMeteorSubscriptions: function(){
	Meteor.subscribe('mems');
  },
  getMeteorState: function(){
    return {
	  mems: Mems.find({}).fetch()
	};
  },
  handleSelect: function(name) {
	this.setState({
		mem: Mems.findOne({name: name}),
		edit: false
	});
  },
  handleEdit: function() {
	this.setState({
		edit: true
	});
  },
  handleNew: function() {
	this.setState({
		mem: false
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
                  <ContentWrapper 
					mem={this.state.mem}
					edit={this.state.edit}
					handleEdit={this.handleEdit}
					handleNew={this.handleNew}
				  />
                </div> 
              </div>
            );
  }
});
