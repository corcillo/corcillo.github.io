window.addEventListener("scroll", function(){
  console.log("aldkjfalkjdf");
  var currentY = window.pageYOffset;
  var scope = angular.element($("#sideBarContainer")).scope();
  scope.$apply(function(){
    console.log("in apply fn");
    console.log(currentY);
    if (currentY > scope.oldY) {
      scope.showSideBar = false;
      scope.oldY = currentY;
    } else {
      scope.showSideBar = true;
      scope.oldY = currentY;
    }
  })
});