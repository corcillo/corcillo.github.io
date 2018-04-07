app.controller("myCtrl", function($scope) {
    $scope.selectedPage = "home";
    $scope.gridWidth = 1;
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
    $scope.range = function(len) {
      return Array.from(Array(len).keys());
    }
    $scope.calculatePhotoWidth = function() {
      return 1000;
    }
    $scope.showSideBar = true;
    $scope.oldY = 0;
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