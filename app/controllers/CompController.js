'use strict';

app.controller("CompController", function($scope, $window, UserFactory, CompFactory) {

  let currentUser = null;

  UserFactory.isAuthenticated()
    .then((user) => {
      console.log("user status", user);
      currentUser = UserFactory.getUser();
      fetchComp();
    });
  
  // $scope.searchText = FilterFactory;

  // for viewing all computers, deleting a computer, and updating a computer
  function fetchComp() {
    let compArr = [];
    console.log("Fetch called");
    CompFactory.getCompList(currentUser)
      .then((compList) => {
        console.log("comp Data", compList);
        let compData = compList.data;
        Object.keys(compData).forEach((key) => {
          compData[key].id = key;
          compArr.push(compData[key]);
        });
        $scope.comp = compArr;
      })
      .catch((err) => {
        console.log("error!", err);
      });
  }

  $scope.deleteComp = (compId) => {
    console.log("delete called", compId);
    CompFactory.deleteTodoItem(compId)
      .then((data) => {
        console.log("removed item", data);
        fetchComp(currentUser);
      });
  };

  $scope.updateComp = (todoItem) => {
    console.log("status update");
    CompFactory.updateTodoStatus()
      .then((data) => {
        console.log("Updated status");
      });
  };

});