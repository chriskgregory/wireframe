Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/recipes', {
	name: 'recipes',
	template: 'Recipes'
});

Router.route('/mealplan', {
	name: 'mealplan',
	template: 'Mealplan'
});

Router.route('/groceries', {
	name: 'groceries',
	template: 'Groceries'
});

Router.route('/prepare', {
	name: 'prepare',
	template: 'Prepare'
});