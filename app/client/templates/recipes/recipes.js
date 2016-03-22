/*****************************************************************************/
/* Recipes: Event Handlers */
/*****************************************************************************/
Template.Recipes.events({
	'click .close-mmp': function(){
		$('.wrapper-mini-mealplan').hide();
	}
});

/*****************************************************************************/
/* Recipes: Helpers */
/*****************************************************************************/
Template.Recipes.helpers({
});

/*****************************************************************************/
/* Recipes: Lifecycle Hooks */
/*****************************************************************************/
Template.Recipes.onCreated(function () {
});

Template.Recipes.onRendered(function () {
	$('#mmp-datepicker').datepicker();
});

Template.Recipes.onDestroyed(function () {
});
