Freq = React.createClass({
  selectFreq: function() {
    if (this.state && this.state.margin == 20) {
		this.setState({margin: 0});
	} else {
		this.setState({margin: 20});
	}
    this.props.selectFreq();
  },

  render: function () {
    var margin = 0;
    var height = 40;
    var freq = this.props.freq;
    var ar = Session.get('freq');
    if (ar.indexOf(freq) > -1) {
      margin = 5;
      height = 50;
    }

    return (
      <div className="col-xs-3" onClick={this.selectFreq} style={{marginTop: margin }}>
        <img src={this.props.src}
             style={{height: height}}
            />
      </div>
    );
  }
});
