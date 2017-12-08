var app = angular.module('diveLog', []);
app.factory('diveLogApi', function() {
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
    return {
        getDives: function() {
            return dives;
        }
    }
});

app.controller('diveLogCtrl', function($scope, diveLogApi) {
    $scope.dives = [];
    var loading = false;
    $scope.isLoading = function() {
        return loading;
    }
    $scope.refreshDives = function() {
        loading = true;
        $scope.dives = [];
        setTimeout(function() {
            $scope.dives = diveLogApi.getDives();
            loading = false;
            $scope.$apply();
        }, 1000);
    } 
});