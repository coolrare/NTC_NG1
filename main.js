angular.module('app', [])
    .controller('MainController', function () {
    //  ng-init="PName='BMW';Price=1990000;Qty=5"
    var vm = this;
    vm.PName = 'BMW';
    vm.Price = 19900000;
    vm.Qty = 5;
    vm.Subtotal = function (Price, Qty) {
        var sum = Price * Qty;
        if (Qty >= 10) {
            sum = sum * 0.9;
        }
        return sum;
    };
    vm.carts = [];
    vm.add = function () {
        vm.carts.push({
            PName: vm.PName,
            Price: vm.Price,
            Qty: vm.Qty
        });
    };
    vm.del = function (idx) {
        vm.carts.splice(idx, 1);
    };
});
//# sourceMappingURL=main.js.map