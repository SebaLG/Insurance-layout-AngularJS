var app = angular.module('projectKimbap', ["ngRoute"]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'components/home.html',
            controller: 'MainController',
            controllerAs: 'controller'
        })
        .when('/coverages', {
            templateUrl: 'components/coverages.html',
            controller: 'MainController',
            controllerAs: 'controller'
        })
        .when('/personalForm', {
            templateUrl: 'components/personalForm.html',
            controller: 'MainController',
            controllerAs: 'controller'
        })
        .when('/summary', {
            templateUrl: 'components/summary.html',
            controller: 'MainController',
            controllerAs: 'controller'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);

app.controller('MainController', ['$route', '$routeParams', '$location', function($route, $routeParams, $location) {

    this.$route = $route;
    this.$routeParams = $routeParams;
    this.$location = $location;

    var controller = this;

    controller.coverages = [
        { name: "RCA", price: "100€", selected: "false" },
        { name: "Kasko", price: "150€", selected: "false" },
        { name: "Collision", price: "10€", selected: "false" },
        { name: "Fire", price: "99€", selected: "false" }
    ];

    console.log("TCL: controller.coverages", controller.coverages)

    // method to add an item to the list
    controller.addCoverages = () => {


        console.log("TCL: controller.coverages", controller.coverages)
            // Put the object into storage
        localStorage.setItem('coverages', JSON.stringify(controller.coverages));
        $('#form-coverages').submit();
        $location.path("/personalForm");



    };




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