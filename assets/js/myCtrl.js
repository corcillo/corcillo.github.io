app.controller("myCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.selectedPage = "home";
    $scope.setCurrentLink = function(path) {
      $scope.selectedPage = path;
    }
    $scope.getLinkColorCss = function(path) {
      if ($scope.selectedPage === path) {
        return {"color": "paleturquoise"};
      } else {
        return "";
      }
    }
});
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/assets/partials/home.html"
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
    .when("/contact", {
        templateUrl : "/assets/partials/contact.html"
    })
});