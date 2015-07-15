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
    alert(name);
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
