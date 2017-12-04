var app = angular.module('maintenance', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider.when('/locations', {
        templateUrl: 'views/locations.html'
    })
    .when('/sites', {
        templateUrl: 'views/sites.html'
    })
    .otherwise({
        templateUrl: 'views/main.html'
    });
});
app.controller('AdminCtrl', function($scope) {
});