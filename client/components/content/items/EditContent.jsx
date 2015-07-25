EditContent = React.createClass({
  render: function () {
    return (
      <div className="col-sm-12">
        <input className="form-control" id="newname" ></input>
        <textarea className="form-control" rows="20" id="newcontent" ></textarea>
      </div>
    );
  }
})
