(function() {
	'use strict';

	angular
		.module('supermodular.home')
		.factory('menuItems', menuItems);

	menuItems.$inject = [];

	/* @ngInject */
	function menuItems() {
		var data = [{
			title: 'Marque',
			path: 'canvas-marque',
			icon: 'ion-edit'
		}, {
			title: 'Move',
			path: 'canvas-move',
			icon: 'ion-edit'
		}, {
			title: 'Line',
			path: 'canvas-line',
			icon: 'ion-edit'
		}, {
			title: 'Point',
			path: 'canvas-point',
			icon: 'ion-edit'
		}, {
			title: 'Circle',
			path: 'canvas-circle',
			icon: 'ion-edit'
		},{
			title: 'Cloud',
			path: 'canvas-cloud',
			icon: 'ion-edit'
		}];

		return data;
	}
})();
