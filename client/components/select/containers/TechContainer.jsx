TechContainer = React.createClass({

  selectTech: function(tech) {

    if (this.props.mode == 'view') {
      var ar = Session.get('tech');
      var index = ar.indexOf(tech);
      index > -1 ? ar.splice(index, 1) : ar.push(tech);
      Session.set('tech', ar);
    } else {
      Session.set('tech', [tech]);
    }

    this.props.selectTech();
  },

  renderTech: function(src) {
    return (
      <Tech
        selectTech = {this.selectTech.bind(this, src)}
        src = {"/logo/" + src + ".png"}
        key = {src}
        tech = {src}
      />
    );
  },

  render: function() {
    var techs = ["js", "jquery", "react", "meteor"];
    return (
              <div className="row">
                {techs.map(this.renderTech)}
              </div>
           );
  }
});
