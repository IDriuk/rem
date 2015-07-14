MemContentEdit = React.createClass({
  render: function () {
    return (
      <div className="col-sm-12">
        <input className="form-control" placeholder="name" id="newname" ></input>
        <textarea className="form-control" placeholder="content" rows="20" id="newcontent" ></textarea>
      </div>
    );
  }
})
