Meteor.methods({
	newMem: function(mem) {
	  console.log(mem);
	  console.log("new");
	},
	saveMem: function(mem) {
	  console.log(mem);
	  console.log("save");
	},
	editMem: function(mem) {
	  console.log(mem);
	  console.log("edit");
	},
	removeMem: function(mem) {
	  console.log(mem);
	  console.log("remove");
	}
});