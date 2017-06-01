angular.module('app', [])
    .controller('MainController', function() {
        //  ng-init="PName='BMW';Price=1990000;Qty=5"
        var vm = this;

        vm.default = {
            PName: '勃肯鞋',
            Price: 2980,
            Qty: 1
        };

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

        vm.Subtotal = function(Price, Qty) {
            let sum = Price * Qty;
            if(Qty >= 10) {
                sum = sum * 0.9;
            }
            return sum;
        }

        vm.add = function() {
            vm.carts.push(angular.copy(vm.default));
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
            vm.carts.forEach((item, i) => {
                if(i != idx) {
                    vm.cancel(i);
                } else {
                    vm.carts[idx].Qty2 = vm.carts[idx].Qty;
                    vm.carts[idx].IsEdit = true;
                }
            });
        }

        vm.cancel = function(idx) {
            delete vm.carts[idx].Qty2;
            delete vm.carts[idx].IsEdit;
        }

        vm.save = function(idx) {
            vm.carts[idx].Qty = vm.carts[idx].Qty2;
            delete vm.carts[idx].Qty2;
            delete vm.carts[idx].IsEdit;
        }

        vm.ValidateQty = function(obj, propertyName: string) {
            if (obj[propertyName] <= 0) {
                obj[propertyName] = 1;
            }
        }

        vm.empty = function() {
            if(confirm('你確定要清空購物車嗎？')) {
                vm.carts = [];
            }
        }
    })
