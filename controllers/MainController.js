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
    this.$route = $route;
    this.$routeParams = $routeParams;
    this.$location = $location;
}]);

app.controller("HomeController", [ '$scope', "formFactory", "$http", "$window", function($scope, formFactory, $http, $window) {
    $scope.message = "HOME PAGE";
    $scope.list = [];
    $scope.submit = function() {
      if(formFactory != null) {
        $scope.list = formFactory.getPeople()
      }
      
      $scope.list.push($scope.model)           
      formFactory.setPeople($scope.list)
      console.log(formFactory.getPeople())
    }
}]);

// TODO to use Firebase
app.factory("formFactory", ["$window", function($window) {
    var result = {
        setPeople: function(value){
            $window.localStorage.setItem("people", JSON.stringify(value));
        },
        getPeople: function() {
            var list = $window.localStorage.getItem("people")
            return JSON.parse(list)
        }
    }
    return result;
}])

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