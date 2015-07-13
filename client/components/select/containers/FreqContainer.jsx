FreqContainer = React.createClass({

  handleChoose: function (freqName) {
    Session.set('selected_freq', freqName);
  },
  
  renderFreq: function(freq) {
    return (
            <Freq
              frequency={"/logo/" + freq + ".png"}
			  handleChoose = {this.handleChoose.bind(this, freq)}
            />
        );
  },
  
  render: function() {
    var freqs = ["frequently", "monkey" , "bow"];
    return (
              <div className="row">
                {freqs.map(this.renderFreq)}
              </div>
            );
  }
});
