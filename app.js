(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService){
    var buy = this;
    buy.items = ShoppingListCheckOffService.GetItemsToBuy();
    buy.buyItem = function(index) {
      ShoppingListCheckOffService.buyItem(index);
    };
  };

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.items = ShoppingListCheckOffService.GetBoughtItems();
  };

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItems = [
      { name: "Cookies", quantity: 10 },
      { name: "Milk", quantity: 2 },
      { name: "Chips", quantity: 8},
      { name: "Donuts", quantity: 5 },
      { name: "Ice Cream", quantity: 2 }
    ];
    var boughtItems = [];

    service.GetItemsToBuy = function() {
      return toBuyItems;
    };

    service.GetBoughtItems = function() {
      return boughtItems;
    };

    service.buyItem = function(itemIndex) {
      var item = toBuyItems[itemIndex];
      boughtItems.push(item);
      toBuyItems.splice(itemIndex, 1);
    };
  };

})();
