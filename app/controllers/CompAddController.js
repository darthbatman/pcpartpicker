'use strict';

app.controller("CompAddController", function($scope, $window, CompFactory, UserFactory) {

  $scope.formTitle = "Create Computer";

  $scope.comp = {
    name: "",
    description: "",
    uid: UserFactory.getUser()
  };

  $scope.addBasicsToComp = () => {
    CompFactory.setCompBasics($scope.comp);
      $window.location.href = '#!/socket/view';
  };

});
