var app = angular.module('app', ['ngRoute', 'core', 'maintenance']);
app.config(function($routeProvider) {
    $routeProvider.when('/locations', {
        templateUrl: 'views/locations.html',
        controller: 'LocationsCtrl'
    })
    .when('/sites', {
        templateUrl: 'views/sites.html',
        controller: 'SitesCtrl'
    })
    .when('/types', {
        templateUrl: 'views/types.html',
        controller: 'TypesCtrl'
    })
    .otherwise({
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    });
});
app.controller('AdminCtrl', function($scope, currentSpot) {
    $scope.getTitle = function() {
        return currentSpot.getTitleText();
    }
});
app.controller('MainCtrl', function($scope, currentSpot) {
    
});