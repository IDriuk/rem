FreqContainer = React.createClass({
  renderFreq: function(freq) {
    return (
            <Freq
              frequency={freq}
            />
        );
  },
  render: function() {
    var freqs = ["/frequently_logo.png", "/monkey_logo.png" , "bow_logo1.png"];
    return (
              <div className="row">
                {freqs.map(this.renderFreq)}
              </div>
            );
  }
});
