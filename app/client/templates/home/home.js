/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
	'click .demo-click':function(e){
		if ($('.demo-click i').hasClass('fa-arrow-circle-o-up')) {
			$('.demo-click i').removeClass('fa-arrow-circle-o-up').addClass('fa-arrow-circle-o-down');
			$('.inner-demo').css('display', 'none');
			$('.desc1').addClass('desc4');

		} else if ($('.demo-click i').hasClass('fa-arrow-circle-o-down')) {
			$('.demo-click i').removeClass('fa-arrow-circle-o-down').addClass('fa-arrow-circle-o-up');
			$('.inner-demo').css('display', 'block');
			$('.desc1').removeClass('desc4');
		}
	}
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});
