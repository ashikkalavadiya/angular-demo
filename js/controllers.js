var phonecatApp = angular.module('phoneApp', ['LocalStorageModule']);
//alert(data)
phonecatApp.controller('PhoneListCtrl', ['$scope', 'localStorageService', '$http', function($scope, localStorageService, $http) {
        console.log('test');
        $scope.getData = function() {
            if (localStorageService.get('phoneDetails')) {
                console.log('from local storage');
                var localTime = new Date().getTime();
                console.time('loadTimeFromLocal');
                $scope.phones = localStorageService.get('phoneDetails');
                console.timeEnd('loadTimeFromLocal');
                $scope.ResponseTime = new Date().getTime() - localTime;
            } else {
                console.log('From Database');
                var ajaxTime = new Date().getTime();
                console.time('loadTimeFromDB');
                $http({url: "getDetails.php", method: "POST"}).
                        success(function(data, status, headers, config) {
                            //console.log(data);
                            $scope.phones = data;
                            localStorageService.add('phoneDetails', data);
                            console.timeEnd('loadTimeFromDB');
                            $scope.ResponseTime = new Date().getTime() - ajaxTime;
                        }).
                        error(function(data, status, headers, config) {
                        });
            }
        }
        $scope.doRefresh = function() {
            if (localStorageService.get('phoneDetails')) {
                localStorageService.remove('phoneDetails');
                $scope.getData();
            }
        }

    }]);

