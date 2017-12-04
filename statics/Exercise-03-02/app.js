var app = angular.module('maintenance', []);
app.controller('AdminCtrl', function($scope) {
    $scope.view = 'main';
    $scope.menu = '';
    $scope.showMain = function() {
        $scope.view = 'main';
    }
    $scope.showLocations = function() {
        $scope.view = 'locations';
        $scope.menu = 'Locations';
    }
    $scope.showDiveSites = function() {
        $scope.view = 'diveSites';
        $scope.menu = 'Sites';
    }
    $scope.isAction = function(menu) {
        return $scope.menu = menu;
    }
});