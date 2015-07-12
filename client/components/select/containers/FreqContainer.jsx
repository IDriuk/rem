FreqContainer = React.createClass({
  renderFreq: function(freq) {
    return (
            <Freq
              frequency={freq}
            />
        );
  },
  render: function() {
    var freqs = ["/logo/frequently.png", "/logo/monkey.png" , "/logo/bow.png"];
    return (
              <div className="row">
                {freqs.map(this.renderFreq)}
              </div>
            );
  }
});
