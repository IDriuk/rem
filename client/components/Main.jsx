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
  render: function() {
    return (
              <div className="container">
                <div className="row">
                  <SelectWrapper mems={this.state.mems} />
                  <ContentWrapper />
                </div> 
              </div>
            );
  }
});
