var Main = ReactMeteor.createClass({
  templateName: 'Main',
  startMeteorSubscriptions: function(){},
  getMeteorState: function(){},
  render: function() {
    return (
              <div>
                <SelectWrapper/>
                <ContentWrapper/> 
              </div>
            );
  }
});
