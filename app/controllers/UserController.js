'use strict';

app.controller("UserController", function($scope, $window, UserFactory, MoboFactory) {

  // let moboSortOptions = "TR4"

  // MoboFactory.getMobos(moboSortOptions);

  $scope.account = {
    email: "",
    password: ""
  };

  $scope.register = () => {
    console.log("you clicked register");
    UserFactory.createUser($scope.account)
    .then( (userData) => {
      console.log("New User!", userData);
      $scope.login();
    });
  };

  $scope.login = () => {
    console.log("you clicked login");
    UserFactory.loginUser($scope.account)
    .then( (userData) => {
      console.log("userData", userData);
      $window.location.href = '#!/comp/view';
    });
  };
});
