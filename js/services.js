var gtServ = angular.module('app.services', []);
gtServ.factory('PhoneServ', ['$http','localStorageService', function($http, localStorageService) {
    var service = {
        getData : function() {
            if (localStorageService.get('phoneDetails')) {
                console.log('from local storage');
                return localStorageService.get('phoneDetails');
            } else {
                console.log('From Database');               
                $http({url: "getDetails.php", method: "POST"}).
                        success(function(data, status, headers, config) {
                            //console.log(data);
                            localStorageService.add('phoneDetails', data);
                             return data;
                        }).
                        error(function(data, status, headers, config) {
                        });
            }
        }
    }
    return service;
}]);
/**
 * 
 */
