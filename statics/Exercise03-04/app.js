var app = angular.module('maintenance', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider.when('/locations', {
        templateUrl: 'views/locations.html',
        controller: 'LocationsCtrl'
    })
    .when('/sites', {
        templateUrl: 'views/sites.html',
        controller: 'SitesCtrl'
    })
    .otherwise({
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    });
});
app.factory('currentSpot', function() {
    var activeMenu = '';
    var titleText = '';
    return {
        setCurrentSpot: function(menu, title) {
            activeMenu = menu;
            titleText = title; 
        },
        getActiveMenu: function() {
            return activeMenu;
        },
        getTitleText: function() {
            return titleText;
        }
    }
});
app.directive('ywActiveMenu', function(currentSpot) {
    return function(scope, element, attrs) {
        var ywActiveMenu = attrs["ywActiveMmenu"];
        var ywActiveTitle = attrs["ywActiveTitle"];
        currentSpot.setCurrentSpot(ywActiveMenu, ywActiveTitle);
    }
});
app.controller('AdminCtrl', function($scope, currentSpot) {
    $scope.getTitle = function() {
        return currentSpot.getTitleText();
    },
    $scope.isActive = function(activeMenu) {
        return currentSpot.getActiveMenu() === activeMenu;
    }
});
app.controller('MainCtrl', function($scope, currentSpot) {
    
});
app.controller('LocationsCtrl', function($scope, currentSpot) {
    
});
app.controller('SitesCtrl', function($scope, currentSpot) {
    
});