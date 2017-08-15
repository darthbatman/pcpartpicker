'use strict';

app.controller("MemController", function($scope, $window, MemFactory, CompFactory, MoboFactory, $routeParams) {
 // Needs moboValue data from MoboController

  let comp_Id;

  $scope.comp = CompFactory.getComp();
  console.log("comp Obj in MemController", $scope.comp);
  let ramSlots = $scope.comp.mobo.ramSlots;
  let maxRAM = $scope.comp.mobo.maxRAM;
  
  let ramConfig = maxRAM / ramSlots;
  console.log("ramConfig", ramConfig);

  let memSortOptions = maxRAM + 'GB' + ' (' + ramSlots + 'x' + ramConfig + ')';

  console.log("maxRAM in MemController", memSortOptions);
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
    $scope.comp = CompFactory.getComp();
    $scope.comp.mem = memData;
    console.log("memData in memPartial", memData);
    $window.location.href = `#!/comp/view`;
  };
});
