Meteor.methods({
	newMem: function(mem) {
	  console.log(mem);
	  console.log("new");
	},
	saveMem: function(mem) {
	  console.log(mem);
	  console.log("save");
	  Mems.insert(mem);
	},
	editMem: function(mem) {
	  console.log(mem);
	  console.log("edit");
	  Mems.update(mem._id, mem);
	},
	removeMem: function(mem) {
	  console.log(mem);
	  console.log("remove");
	  Mems.remove(mem);
	}
});