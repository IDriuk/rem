Router.configure({
  layoutTemplate: 'app'
});

Router.route('/', function() {
  this.render('Main');
});
