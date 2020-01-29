var app = angular.module('projectKimbap',["ngRoute"]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: 'components/home.html', controller: 'HomeController', controllerAs: 'Home'
    })
    .when('/temp1', {
        templateUrl: 'component/temp1.html', controller: '', controllerAs: ''
    })
    .when('/temp2', {
        templateUrl: 'component/temp2.html', controller: '', controllerAs: ''
    })
    .otherwise({
        redirectTo: '/'
    });
}]);

app.controller('MainController', ['$route', '$routeParams', '$location', function($route, $routeParams, $location){
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