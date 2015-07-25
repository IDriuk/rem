SelectWrapper = React.createClass({
  selectName: function (name) {
	   this.props.selectName(name);
  },
  render: function() {
    return (
      <div className="col-sm-4">
        <ActContainer
          mem = {this.props.mem}
          mode = {this.props.mode}
          setMode = {this.props.setMode}
          searchMem = {this.props.searchMem}
        />
        <TechContainer
          mode = {this.props.mode}
          selectTech = {this.props.selectTech}
        />
        <FreqContainer
          mode = {this.props.mode}
          selectFreq = {this.props.selectFreq}
        />
        <NamesContainer
			       mems={this.props.mems}
			       selectName = {this.selectName}
		    />
      </div>
    );
  }
});
