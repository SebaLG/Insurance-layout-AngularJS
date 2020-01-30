var app = angular.module('projectKimbap', ["ngRoute"]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'components/home.html',
            controller: 'HomeController',
            controllerAs: 'Home'
        })
        .when('/coverages', {
            templateUrl: 'component/coverages.html',
            controller: 'HomeController',
            controllerAs: 'Home'
        })
        .when('/personalForm', {
            templateUrl: 'component/personalForm.html',
            controller: 'HomeController',
            controllerAs: 'Home'
        })
        .when('/summary', {
            templateUrl: 'component/summary.html',
            controller: 'HomeController',
            controllerAs: 'Home'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.controller('MainController', ['$route', '$routeParams', '$location', function($route, $routeParams, $location) {
    console.log("dd")
    this.hdetails = {
        name: 'temp'
    };
    this.$route = $route;
    this.$routeParams = $routeParams;
    this.$location = $location;
}]);

app.controller("HomeController", function($scope) {
    $scope.message = "HOME PAGE";
});

app.component('headerDetail', {
    templateUrl: 'components/header.html',
    bindings: {
        hdetails: '='
    }
});
app.component('footer', {
    templateUrl: 'components/footer.html',
    bindings: {
        fdetails: '='
    }
});
app.component('sidebar', {
    templateUrl: 'components/sidebar.html',
    bindings: {
        sidebar: '='
    }
});

;