Meteor.publish('mems', function() {
	return Mems.find();
});