'use strict';

app.controller("CPUController", function($scope, $window, CPUFactory, CompFactory, MoboFactory, $routeParams) {
 // Needs optionValue data from SocketController
 
  let comp_Id;

  $scope.comp = CompFactory.getComp();
  console.log("comp Obj", $scope.comp);
  let memSortOptions = $scope.comp.mobo;
  console.log("Motherboard data?", memSortOptions);
  let moboSortOptions = $scope.comp.socket;
  // let moboSortOptions = $routeParams.optionValue;

  console.log("CPUController moboSortOptions", moboSortOptions);
  CPUFactory.getCPUs(moboSortOptions)
  .then((cpuData) => {
    $scope.cpuData = cpuData;
    console.log("cpuData from getCPUs", cpuData);
  })
  .catch((err) => {
    console.log("error from getCPUs", err);
  });

  $scope.addCPUToComp = (cpuData) => {
    CompFactory.setCompCPU(cpuData);
    console.log("cpuData in cpuPartial", cpuData);
    $window.location.href = `#!/comp/${comp_Id}/mem/view/${memSortOptions}`;
  };
});










// // for viewing all todo items, deleting an item, updating completed status
//   function fetchMobo() {  
//     let todoArr = [];
//     console.log("Fetch called");
//     SocketFactory.getTodoList(currentUser)
//     .then( (todoList) => {
//       console.log("todo Data", todoList);
//       let todoData = todoList.data;
//       Object.keys(todoData).forEach( (key) => {
//         todoData[key].id = key;
//         todoArr.push(todoData[key]);
//       });
//       $scope.todos = todoArr;
//     })
//     .catch( (err) => {
//       console.log("error!", err);
//     });
//   }

//   $scope.deleteMobo = (taskId) => {
//     console.log("delete called", taskId);
//     SocketFactory.deleteTodoItem(taskId)
//     .then( (data) => { 
//       console.log("removed item", data);
//       fetchSocket(currentUser);
//     });
//   };

//   $scope.updateTaskStatus = (todoItem) => {
//     console.log("status update");
//     SocketFactory.updateTodoStatus(todoItem)
//     .then( (data) => {
//       console.log("Updated completed status");
//     });
//   };

// });