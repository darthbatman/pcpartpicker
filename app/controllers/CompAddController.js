'use strict';

app.controller("CompAddController", function($scope, $window, Factory, CompFactory, UserFactory) {

  $scope.formTitle = "Create Computer";
  $scope.comp = {
    name: "",
    description: "",
    uid: UserFactory.getUser()
  };

  $scope.saveComp = () => {
    CompFactory.postNewComp($scope.comp)
    .then( (data) => {
      console.log("new comp data", data);
      $window.location.href = '/socket/view';
    });
  };

});
