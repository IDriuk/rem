FreqContainer = React.createClass({

  handleChoose: function (freqName) {
    Session.set('selected_freq', freqName);
  },
  
  renderFreq: function(freq) {
    return (
            <Freq
              src={"/logo/" + freq + ".png"}
			  handleChoose = {this.handleChoose.bind(this, freq)}
			  key={freq}
            />
        );
  },
  
  render: function() {
    var freqs = ["often", "monkey" , "bow"];
    return (
              <div className="row">
                {freqs.map(this.renderFreq)}
              </div>
            );
  }
});
