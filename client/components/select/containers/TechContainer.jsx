TechContainer = React.createClass({
  renderTech: function(src) {
    return (
      <Tech
        src = {src}
      />
    );
  },
  render: function() {
    var imgs = ["/logo/js.png",
                "/logo/jquery.png",
                "/logo/react.png",
                "/logo/meteor.png"];
    return (
              <div className="row">
                {imgs.map(this.renderTech)}
              </div>
           );
  }
});
