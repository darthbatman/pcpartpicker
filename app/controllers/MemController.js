'use strict';

app.controller("MemController", function($scope, $window, MemFactory, CompFactory, MoboFactory, $routeParams) {
 // Needs moboValue data from MoboController

  let comp_Id;

  $scope.comp = CompFactory.getComp();
  console.log("comp Obj", $scope.comp);

  let memSortOptions = $scope.comp.mobo;
  console.log("computer in MemController", memSortOptions);
  MemFactory.getMem(memSortOptions)
  .then((memData) => {
    $scope.memData = memData;
    console.log("memData from getMem", memData);
  })
  .catch((err) => {
    console.log("error from getMem", err);
  });

  $scope.addMemToComp = (memData) => {
    CompFactory.setCompMem(memData);
    console.log("memData in memPartial", memData);
    $window.location.href = `#!/comp/view`;
  };
});
