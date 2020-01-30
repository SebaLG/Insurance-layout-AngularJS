var app = angular.module('projectKimbap', ["ngRoute"]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'components/home.html',
            controller: 'HomeController',
            controllerAs: 'Home'
        })
        .when('/coverages', {
            templateUrl: 'components/coverages.html',
            controller: 'CoveragesController',
            controllerAs: 'Coverages'
        })
        .when('/personalForm', {
            templateUrl: 'components/personalForm.html',
            controller: 'FormController',
            controllerAs: 'Form'
        })
        .when('/summary', {
            templateUrl: 'components/summary.html',
            controller: 'SummaryController',
            controllerAs: 'Summary'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.controller('MainController', ['$route', '$routeParams', '$location', function($route, $routeParams, $location) {
    // this.hdetails = {
    //     name: 'temp'
    // };
    this.$route = $route;
    this.$routeParams = $routeParams;
    this.$location = $location;
}]);

app.controller("HomeController", function($scope) {
    $scope.message = "HOME PAGE";
});

app.controller("CoveragesController", function($scope) {
    $scope.message = "COVERAGES PAGE";
});

app.controller("FormController", function($scope) {
    $scope.message = "PERSONAL FORM PAGE";
});

app.controller("SummaryController", function($scope) {
    $scope.message = "SUMMARY PAGE";
});

;