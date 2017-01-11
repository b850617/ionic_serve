(function() {
	'use strict';

	angular
		.module('supermodular.canvaspoint', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.canvas-point', {
				url: '/canvas-point',
				views: {
					'menuContent': {
						templateUrl: 'scripts/canvas-point/canvas-point.html',
						controller: 'CanvasPointController as vm'
					}
				}
			});
		});
})();
