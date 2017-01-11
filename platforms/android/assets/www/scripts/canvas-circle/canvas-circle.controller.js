(function() {
	'use strict';

	angular
		.module('supermodular.canvascircle')
		.controller('CanvasCircleController', CanvasCircleController);

	CanvasCircleController.$inject = ['$scope', '$rootScope', 'canvasCircleService'];

	/* @ngInject */
	function CanvasCircleController($scope, $rootScope, canvasCircleService) {
		var vm = angular.extend(this, {
			path: null,
			point: null,
			startPoint: null,
			pointShape: null,
			pathShape: null,
			tool: null,
			onMouseDown: onMouseDown,
			onMouseDrag: onMouseDrag,
			onMouseUp: onMouseUp,
			points:[],
			lines: [],
			shapes: [],
		});

		// Initialize
		(function(){
			initPaper();
		})()

		// ********************************* //

		function initPaper() {
			paper.install(window);
			paper.setup('canvasCircle');
			var textItem = new PointText({
				content: 'Click and drag to select with Circle.',
				point: new Point(20, 30),
				fillColor: 'black',
			});

			// Sample draws
		

			// Empty the tools
			// paper.tools = [];
			// vm.tool = new Tool();
			initTool();
			vm.tool = $rootScope.tool;

			// Define a mousedown and mousedrag handler
			vm.tool.onMouseDown 	= onMouseDown;
			vm.tool.onMouseDrag 	= onMouseDrag;
			vm.tool.onMouseUp 	= onMouseUp;

			paper.view.update();
    } // initPaper

		function initTool(){
			if (!$rootScope.tool){
				$rootScope.tool = new Tool();
			}else {
				!$rootScope.tool.remove();
				$rootScope.tool = new Tool();
			}
		}

		function resetShapes(){
			for (var i in vm.shapes) {
					vm.shapes[i].strokeColor = 'green';
			}
		}

	
			







		function onMouseDown(event) {
		var myCircle = new Path.Circle(new Point(event.point), 50);
		myCircle.fillColor = 'black';
		resetShapes();
		}

		

		function onMouseDrag(event) {
		}
		// When the mouse is released, we simplify the path:
		function onMouseUp(event) {
			// alert('Select area: ' + JSON.stringify(vm.rect));
			for (var i in vm.points) {
				if (vm.point.intersects(vm.points[i])){
					vm.shapes[i].strokeColor = 'red';
					// alert('Intersects with: ' + JSON.stringify(vm.rects[i]));
					console.log('Intersects with: ', vm.points[i]);
				}
			}
			console.log(event.point);
		}

	}
})();