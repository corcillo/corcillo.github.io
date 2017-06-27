app.controller("myCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/assets/partials/sidebar.html"
    })
    .when("/photos", {
        templateUrl : "/assets/partials/photos.html"
    })
    .when("/art", {
        templateUrl : "/assets/partials/art.html"
    })
    .when("/about", {
        templateUrl : "/assets/partials/about.html"
    })
    .when("/art", {
        templateUrl : "/assets/partials/contact.html"
    })
});