EditContent = React.createClass({
  getInitialState: function () {
    var obj = {};

    if (this.props.mode == 'edit' && this.props.mem) {
      obj.name = this.props.mem.name;
      obj.content = this.props.mem.content;
    } else {
      obj.name = '';
      obj.content = '';
    }

    return obj;
  },

  render: function () {
    return (
      <div className="col-sm-12">
        <input className="form-control"
               id="newname"
               defaultValue={this.state.name} ></input>
        <textarea className="form-control"
                  rows="20"
                  id="newcontent"
                  defaultValue={this.state.content}></textarea>
      </div>
    );
  }
})
