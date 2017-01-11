(function() {
	'use strict';

	angular
		.module('supermodular.canvascloud')
		.controller('CanvasCloudController', CanvasCloudController);

	CanvasCloudController.$inject = ['$scope', '$rootScope', 'canvasCloudService'];

	/* @ngInject */
	function CanvasCloudController($scope, $rootScope, canvasCloudService) {
		var vm = angular.extend(this, {
			path: null,
			rect: null,
			point: null,
			startPoint: null,
			rectShape: null,
			pointShape: null,
			tool: null,
			onMouseDown: onMouseDown,
			onMouseDrag: onMouseDrag,
			onMouseUp: onMouseUp,
			rects: [],
			points:[],
			shapes: [],
		});

		// Initialize
		(function(){
			initPaper();
		})()

		// ********************************* //

		function initPaper() {
			paper.install(window);
			paper.setup('canvasCloud');
			var textItem = new PointText({
				content: 'Click and drag to select with Cloud.',
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

		/*function drawPoint(startPoint, endPoint){
			var point = new Rectangle(startPoint, endPoint);
			vm.points.push(point);
			var pointShape = new Shape.Rectangle(point);
			pointShape.strokeColor = 'green';
			vm.shapes.push(pointShape);
		}*/


	
		    var path;
    
		function onMouseDown(event) {
		    path = new Path();
		    path.strokeColor = 'black';
		    path.add(event.point);
		}

		function onMouseDrag(event) {
		     path.arcTo(event.point);
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
			console.log(vm.point);
		}

	}
})();