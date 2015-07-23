Router.configure({
  layoutTemplate: 'app'
});

Router.route('/', function() {

  Session.set('mode', 'view');
  
  this.render('Main');
});
