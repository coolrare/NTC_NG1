angular.module('app', [])
    .controller('MainController', function($http) {
        //  ng-init="PName='BMW';Price=1990000;Qty=5"
        var vm = this;

        vm.default = {
            PName: '勃肯鞋',
            Price: 2980,
            Qty: 1
        };

        vm.carts = [];

        // $http.get('/carts').then(function(result) {
        //     console.log(result.data);
        //     vm.carts = result.data;
        // });

        vm.editItem = {};

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
            vm.editItem = angular.copy(vm.carts[idx]);
            vm.editItem[idx] = true;
        }

        vm.cancel = function(idx) {
            vm.editItem = {};
        }

        vm.save = function(idx) {
            vm.carts[idx] = angular.copy(vm.editItem);
            vm.editItem = {};
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

        vm.submit = function() {
            // vm.carts.forEach(item => {
            //     $http.post('/carts', item)
            //         .then(function() {
            //         });
            // });

            $http.post('/carts', vm.carts)
                .then(function() {
                    vm.carts = [];
                });
        }
    })
