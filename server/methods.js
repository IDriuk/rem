Meteor.methods({
	createMem: function(mem) {
	  Mems.insert(mem);
	},
	updateMem: function(_id, mem) {
	  Mems.update(_id, mem);
	},
	removeMem: function(mem) {
	  Mems.remove(mem);
	}
});
