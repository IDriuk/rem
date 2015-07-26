Meteor.methods({
	createMem: function(mem) {
		if (!Meteor.userId()) { return; }
		var username = Meteor.users.find({_id:Meteor.userId()}).fetch()[0].username;
		if (username != 'veytarn') { return ;}
	  Mems.insert(mem);
	},
	updateMem: function(_id, mem) {
		if (!Meteor.userId()) { return; }
		var username = Meteor.users.find({_id:Meteor.userId()}).fetch()[0].username;
		if (username != 'veytarn') { return ;}
	  Mems.update(_id, mem);
	},
	removeMem: function(mem) {
		if (!Meteor.userId()) { return; }
		var username = Meteor.users.find({_id:Meteor.userId()}).fetch()[0].username;
		if (username != 'veytarn') { return ;}
	  Mems.remove(mem);
	}
});
