'use strict';

app.controller("MoboController", function($scope, $window, MoboFactory) {
  let moboSortOptions = "TR4";

  MoboFactory.getMobos(moboSortOptions);
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