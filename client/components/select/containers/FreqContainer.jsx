FreqContainer = React.createClass({

  selectFreq: function (freq) {

    if (this.props.mode == 'view') {
      var ar = Session.get('freq');
      var index = ar.indexOf(freq);
      index > -1 ? ar.splice(index, 1) : ar.push(freq);
      Session.set('freq', ar);
    } else {
      Session.set('freq', [freq]);
    }

    this.props.selectFreq();
  },

  renderFreq: function(freq) {
    return (
            <Freq
              src={"/logo/" + freq + ".png"}
              selectFreq = {this.selectFreq.bind(this, freq)}
              key={freq}
              freq={freq}
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
