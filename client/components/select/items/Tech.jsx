Tech = React.createClass({
  selectTech: function () {
    this.props.selectTech();
  },

  render: function () {
    var margin = 0;
    var height = 40;
    var tech = this.props.tech;
    var ar = Session.get('tech');
    if (ar.indexOf(tech) > -1) {
      margin = 5;
      height = 50;
    }

    return (
      <div className="col-xs-2" onClick={this.selectTech}  style={{marginTop: margin }}>
        <img src={this.props.src}
             style={{height: height}}
          />
      </div>
    );
  }
});
