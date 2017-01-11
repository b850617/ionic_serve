(function() {
	'use strict';

	angular
		.module('supermodular.canvascloud', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.canvas-cloud', {
				url: '/canvas-cloud',
				views: {
					'menuContent': {
						templateUrl: 'scripts/canvas-cloud/canvas-cloud.html',
						controller: 'CanvasCloudController as vm'
					}
				}
			});
		});
})();
