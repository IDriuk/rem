Act = React.createClass({
  render: function () {
    return (
     <div className="col-sm-1" >
        <img
          src={this.props.src}
          onClick = {this.props.setMode}
          />
      </div>
    );
  }
});
