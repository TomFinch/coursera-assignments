(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.inject = ['$scope', 'ShoppingListCheckOffService'];

function ToBuyShoppingController(ShoppingListCheckOffService) {
	var ToBuyList = this;

	ToBuyList.ToBuy = ShoppingListCheckOffService.getToBuy();

	ToBuyList.addItem = function(index) {
		ShoppingListCheckOffService.addItem(index);
	}
}

	function ShoppingListCheckOffService () {
		var service = this;

		var ToBuy = [
		 {
		 	name: "Milk",
		 	quantity: "12"
		 },
		 {
		 	name: "Donuts",
		 	quantity: "6"
		 },
		 {
		 	name: "Cookies",
		 	quantity: "200"
		 },
		 {
		 	name: "Chocolate",
		 	quantity: "12"
		 },
		 {
		 	name: "Soft Drinks",
		 	quantity: "6"
		 }

		];

		var Bought = [];

		service.getToBuy = function() {
			return ToBuy;
		};

		service.getBought = function() {
			return Bought;
		};

		service.addItem = function(index) {
			var item = ToBuy[index];
			ToBuy.splice(index, 1);
			Bought.push(item);
		}
	}
AlreadyBoughtShoppingController.inject = ['$scope', 'ShoppingListCheckOffService'];

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
	var BoughtList = this;

	BoughtList.Bought = ShoppingListCheckOffService.getBought();

}

})();