(function () {
'use strict';

	angular.module('LunchCheck', [])
    	.controller('lunchCheckController', lunchCheckController);

	lunchCheckController.$inject = ['$scope', '$filter'];
		function lunchCheckController ($scope, $filter) {
			$scope.lunch = "";
			$scope.message = "";

			$scope.Check = function() {
				if ($scope.lunch) {
					var comma = ",";
					var arrayOfStrings = $scope.lunch.split(comma);
					var count = 0;
					for (var i = 0; i < arrayOfStrings.length; i++) {
						if(arrayOfStrings[i].length != 0 
							&& arrayOfStrings[i].trim()) {
							count += 1
						}
					}
					if (count > 3)  {
						$scope.message = "Too Much!";
					}
					else {
						$scope.message = "Enjoy!";
					}
				}
				else {
						$scope.message = "Please enter data first";
					}
			};
		};

})();