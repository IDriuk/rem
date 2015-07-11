TechContainer = React.createClass({
  renderTech: function(src) {
    return (
      <Tech
        src = {src}
      />
    );
  },
  render: function() {
    var imgs = ["/js_logo2.png",
                "/jquery_logo1.png",
                "/react_logo1.png",
                "/meteor_logo.png"];
    return (
              <div className="row">
                {imgs.map(this.renderTech)}
              </div>
           );
  }
});
