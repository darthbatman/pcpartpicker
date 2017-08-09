'use strict';
// Remember to add back SocketFactory
app.controller("SocketController", function($scope, $window, UserFactory) {

  let optionValue = null;

  // $scope.moboRedirect = () => {
  //   console.log("monkey");
  //     .then((data) => {
  //       // console.log("new todo data", data);
  //       $window.location.href = '/:comp_Id/mobo/view';
        
  //     });
  // };

  $scope.valueChange = (value) => {
    console.log(value);
    optionValue = value;
  };

  $scope.data = {
    multipleSelect: [],
    option1: 'option-1'
  };
});