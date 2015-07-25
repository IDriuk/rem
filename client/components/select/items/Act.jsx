Act = React.createClass({
  render: function () {
    return (
     <div className="col-sm-1"
          style = {{display: this.props.display}} >
        <img
          src={this.props.src}
          onClick = {this.props.setMode}
          />
      </div>
    );
  }
});
