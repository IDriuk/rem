FreqContainer = React.createClass({
  renderFreq: function(freq) {
    return (
            <Freq
              frequency={freq}
            />
        );
  },
  render: function() {
    var freqs = ["/frequently_logo.png", "/monkey_logo.png" , "bow_logo.png"];
    return (
              <div className="row">
                {freqs.map(this.renderFreq)}
              </div>
            );
  }
});
