var app = angular.module('diveLog', []);
app.constant('apiUrl', 'http://unraveling-ng.azurewebsites.net');
app.factory('diveLogApi', function($http, apiUrl) {
    var dives = [
        {
            site: 'Abu Gotta Ramada',
            location: 'Hurghada, Egypt',
            depth: 72,
            time: 54
        },
        {
            site: 'Ponte Mahoon',
            location: 'Maehbourg, Mauritius',
            depth: 54,
            time: 38
        },
        {
            site: 'Molnar cave',
            location: 'Budapest, Hungry',
            depth: 99,
            time: 63
        }
    ];
    var counter = 0;
    return {
        getDives: function() {
            var url = apiUrl + '/api/backendtest/dives';
            return $http.get(url);
        }
    }
});

app.controller('diveLogCtrl', function($scope, diveLogApi) {
    $scope.errorMessage = '';
    $scope.dives = [];
    var loading = false;
    $scope.isLoading = function() {
        return loading;
    }
    $scope.refreshDives = function() {
        loading = true;
        $scope.dives = [];
        $scope.errorMessage = '';
        diveLogApi.getDives().success(
            function(data) {
                $scope.dives = data;
                loading = false;
            })
            .error(function(reason) {
                $scope.errorMessage = reason;
                loading = false;
            });
        $scope.$apply();
    } 
});