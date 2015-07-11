TechContainer = React.createClass({
  renderTech: function(src) {
    return (
      <Tech
        src = {src}
      />
    );
  },
  render: function() {
    var imgs = ["/js_logo.png",
                "/jquery_logo.png",
                "/react_logo.png",
                "/meteor_logo.png"];
    return (
              <div className="row">
                {imgs.map(this.renderTech)}
              </div>
           );
  }
});
