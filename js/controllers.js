var phonecatApp = angular.module('phoneApp', ['LocalStorageModule', 'app.services']);
//alert(data)
phonecatApp.controller('PhoneListCtrl', ['$scope', 'localStorageService', '$http', 'PhoneServ', function($scope, localStorageService, $http, PhoneServ) {

        if (PhoneServ.getData()) {
            $scope.phones = PhoneServ.getData();
        }

        $scope.doRefresh = function() {
            if (localStorageService.get('phoneDetails')) {
                localStorageService.remove('phoneDetails');
                if (PhoneServ.getData()) {
                    $scope.phones = PhoneServ.getData();
                }
            }
        }
    }]);

