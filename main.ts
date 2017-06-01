angular.module('app', [])
    .controller('MainController', function() {
        //  ng-init="PName='BMW';Price=1990000;Qty=5"
        var vm = this;
        
        vm.PName = 'BMW';
        vm.Price = 19900000;
        vm.Qty = 5;

        vm.Subtotal = function(Price, Qty) {
            let sum = Price * Qty;
            if(Qty >= 10) {
                sum = sum * 0.9;
            }
            return sum;
        }

        vm.carts = [];

        vm.add = function() {
            vm.carts.push({
                PName: vm.PName,
                Price: vm.Price,
                Qty: vm.Qty
            })
        }

        vm.del = function(idx) {
            vm.carts.splice(idx, 1);
        }

        vm.sum = function() {
            let result = 0;
            for(let i in vm.carts) {
                result += vm.Subtotal(vm.carts[i].Price, vm.carts[i].Qty);
            }
            return result;
        }
    })