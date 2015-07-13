Freq = React.createClass({
  selectFrequency: function() {
    if (this.state && this.state.margin == 20) {
		this.setState({margin: 0});
	} else {
		this.setState({margin: 20});
	}
  },
  render: function () {
	var margin = 0;
 
	if (this.state) {
		margin = this.state.margin; 
	}
	
    return (
      <div className="col-sm-3" onClick={this.selectFrequency} style={{marginTop: margin }}>
        <img src={this.props.frequency} />
      </div>
    );
  }
});
