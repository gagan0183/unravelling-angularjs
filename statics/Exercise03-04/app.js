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
app.directive('ywMenuId', function(currentSpot) {
    var menuElements = [];
    function setActive(element, menuId) {
        if(currentSpot.getActiveMenu() == menuId) {
            element.addClass('active');
        } else {
            element.removeClass('active');
        }
    }    
    return function(scope, element, attrs) {
        var menuId = attrs["ywMenuId"];
        menuElements.push({ id: menuId, node: element});
        var watcherFn = function(watchScope) {
            return watchScope.$eval('getActiveMenu()');
        }
        scope.$watch(watcherFn, function (newValue, oldValue) {
            for(var i = 0; i < menuElements.length; i++) {
                var menuElement = menuElements[i];
                setActive(menuElement.node, menuElement.id);
            }
        })
    }
});
app.controller('AdminCtrl', function($scope, currentSpot) {
    $scope.getTitle = function() {
        return currentSpot.getTitleText();
    }
});
app.controller('MainCtrl', function($scope, currentSpot) {
    
});
app.controller('LocationsCtrl', function($scope, currentSpot) {
    
});
app.controller('SitesCtrl', function($scope, currentSpot) {
    
});