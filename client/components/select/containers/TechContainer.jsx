TechContainer = React.createClass({

  handleChoose: function(techName) {
	Session.set('selected_tech', techName);
  },
  
  renderTech: function(src) {
    return (
      <Tech
	    handleChoose = {this.handleChoose.bind(this, src)}
        src = {"/logo/" + src + ".png"}
		key = {src}
      />
    );
  },
  
  render: function() {
    var imgs = ["js", "jquery", "react", "meteor"];
    return (
              <div className="row">
                {imgs.map(this.renderTech)}
              </div>
           );
  }
});
