var app = angular.module('diveLog', []);
app.factory('diveLogApi', function($q) {
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
            var deferred = $q.defer();
            counter++;
            setTimeout(function() {
                if(counter % 3 == 0) {
                    deferred.reject('Error: call counter is ' + counter);
                }
                else {
                    deferred.resolve(dives);
                }
            }, 1000);
            return deferred.promise;
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
        diveLogApi.getDives().then(
            function(data) {
                $scope.dives = data;
                loading = false;
            },
            function(reason) {
                $scope.errorMessage = reason;
                loading = false;
            }
        );
        $scope.$apply();
    } 
});