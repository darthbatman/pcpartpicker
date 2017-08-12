'use strict';
// Remember to add back SocketFactory
app.controller("SocketController", function($scope, $window, UserFactory, CompFactory, $routeParams) {

  let comp_Id;
  let moboSortOptions;
  // let moboSortOptions = $routeParams.optionValue;

  $scope.valueChange = (value) => {
    console.log(value);
    $scope.comp = CompFactory.getComp();
    moboSortOptions = value;
    $scope.comp.socket = moboSortOptions;
    console.log("socket on comp obj", $scope.comp.socket);
  };

  $scope.data = {
    multipleSelect: [],
    option1: 'option-1'
  };

  
  // console.log("scope value", moboSortOptions);
  // $scope.moboRedirect = () => {
  //   console.log("monkey");
  //     .then((data) => {
  //       // console.log("new todo data", data);
  //       $window.location.href = '/:comp_Id/mobo/view';

  //     });
  // };


  $scope.moboRedirect = () => {
    // CompFactory.setCompSocket();
    console.log("testing", moboSortOptions);
    $window.location.href = `#!/comp/${comp_Id}/mobos/view/${moboSortOptions}`;
  };
});