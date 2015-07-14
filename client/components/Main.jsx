var Main = ReactMeteor.createClass({
  templateName: 'Main',
  startMeteorSubscriptions: function(){
	Meteor.subscribe('mems');
  },
  getMeteorState: function(){},
  render: function() {
    return (
              <div className="container">
                <div className="row">
                  <SelectWrapper/>
                  <ContentWrapper/>
                </div> 
              </div>
            );
  }
});
