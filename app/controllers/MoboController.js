'use strict';

app.controller("MoboController", function($scope, $window, MoboFactory, CompFactory, $routeParams) {

  let comp_Id;

  // let moboValue = null;
  // Remember to use this variable to store mobo data like maxRAM and ramSlots for the memController
  
  $scope.comp = CompFactory.getComp();
  console.log("comp Obj", $scope.comp);
  let moboSortOptions = $scope.comp.socket;
  // let moboSortOptions = $routeParams.optionValue;
  console.log("MoboController moboSortOptions", moboSortOptions);
  MoboFactory.getMobos(moboSortOptions)
    .then((moboData) => {
      $scope.moboData = moboData;
      console.log("moboData from getMobos", $scope.moboData);
    })
    .catch((err) => {
      console.log("error from getMobos", err);
    });

  $scope.addMoboToComp = (moboData) => {
    CompFactory.setCompMobo(moboData);
    $scope.comp = CompFactory.getComp();
    $scope.comp.mobo = moboData;
    console.log("moboData in moboPartial", moboData);
    $window.location.href = `#!/comp/${comp_Id}/cpu/view/${moboSortOptions}`;
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