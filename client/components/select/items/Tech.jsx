Tech = React.createClass({
  handleChoose: function () {
    if (this.state && this.state.margin == 20) {
		this.setState({margin: 0});
	} else {
		this.setState({margin: 20});
	}
	this.props.handleChoose();
  },
  render: function () {
	var margin = 0;
 
	if (this.state) {
		margin = this.state.margin; 
	}
	
    return (
      <div className="col-sm-2" onClick={this.handleChoose}  style={{marginTop: margin }}> 
        <img src={this.props.src} />
      </div>
    );
  }
});
