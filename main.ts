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

        vm.carts = [
            {
                PName: 'T-Shirt - M',
                Price: 399,
                Qty: 3
            },
            {
                PName: '雨傘',
                Price: 80,
                Qty: 5
            }
        ];

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

        vm.edit = function(idx) {
            vm.carts[idx].IsEdit = true;
        }

        vm.save = function(idx) {
            delete vm.carts[idx].IsEdit;
        }
    })