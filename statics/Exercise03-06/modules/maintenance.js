var maintenance = angular.module('maintenance', []);
app.controller('LocationsCtrl', function($scope, currentSpot) {
    var selectedId = -1;
    var addFlag = false;
    var editFlag = false;
    var removeFlag = false;
    var rings = [];
    $scope.model = {};
    refresh();
    $scope.isBusy = function(id) {

    }
});
app.controller('SitesCtrl', function($scope, currentSpot) {
    
});
app.controller('TypesCtrl', function($scope, currentSpot) {
    
});