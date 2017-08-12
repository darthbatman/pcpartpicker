  'use strict';

app.controller("NavController", function($scope, $window, UserFactory) {

  $scope.isLoggedIn = false;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $scope.isLoggedIn = true;
      $scope.$apply();
    } else {
      $scope.isLoggedIn = false;
      $scope.$apply();
      $window.location.href = "#!/login";
    }
  });

  $scope.logout = () => {
    UserFactory.logoutUser();
  };

});
