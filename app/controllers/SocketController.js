'use strict';

app.controller("SocketController", function($scope, $window, SocketFactory, UserFactory) {

  let currentUser = null;

  UserFactory.isAuthenticated()
  .then( (user) => {
    console.log("user status", user);
    currentUser = UserFactory.getUser();
    fetchSocket();
  });

   $scope.data = {
    multipleSelect: [],
    option1: 'option-1'
   };

  // for viewing all todo items, deleting an item, updating completed status
  function fetchSocket() {
    let todoArr = [];
    console.log("Fetch called");
    SocketFactory.getTodoList(currentUser)
    .then( (todoList) => {
      console.log("todo Data", todoList);
      let todoData = todoList.data;
      Object.keys(todoData).forEach( (key) => {
        todoData[key].id = key;
        todoArr.push(todoData[key]);
      });
      $scope.todos = todoArr;
    })
    .catch( (err) => {
      console.log("error!", err);
    });
  }

  $scope.deleteTask = (taskId) => {
    console.log("delete called", taskId);
    SocketFactory.deleteTodoItem(taskId)
    .then( (data) => { 
      console.log("removed item", data);
      fetchSocket(currentUser);
    });
  };

  $scope.updateTaskStatus = (todoItem) => {
    console.log("status update");
    SocketFactory.updateTodoStatus(todoItem)
    .then( (data) => {
      console.log("Updated completed status");
    });
  };

});
