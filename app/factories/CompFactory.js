'use strict';

app.factory("CompFactory", function($q, $http, FirebaseUrl) {

  let getCompList = (userId) => {
    console.log("userId", userId);
    return $q( (resolve, reject) => {
      $http.get(`${FirebaseUrl}comps.json?orderBy="uid"&equalTo="${userId}"`)
      .then( (compData) => {
        resolve(compData);
      })
      .catch( (err) => {
        console.log("oops", err);
        reject(err);
      });
    });
  };

  let postNewComp = (newComp) => {
    return $q( (resolve, reject) => {
      $http.post(`${FirebaseUrl}comps.json`,
        angular.toJson(newComp))
      .then( (newCompData) => {
        resolve(newCompData);
      })
      .catch( (err) => {
        reject(err);
      });
    });
  };

  // let updateTodoStatus = (todo) => {
  //   return $q( (resolve, reject) => {
  //     let itemId = todo.id;
  //     // PUT the entire obj to FB
  //     if (itemId) {
  //       $http.put(`${FirebaseUrl}comps/${itemId}.json`,
  //         angular.toJson(todo))
  //       .then( (data) => {
  //         resolve(data);
  //       })
  //       .catch( (err) => {
  //         reject(err);
  //       });
  //     } else {
  //       console.log("I'm burned out for the day. Go home");
  //     }
  //   });
  // };

  // let deleteTodoItem = (todoId) => {
  //   return $q( (resolve, reject) => {
  //     if (todoId) {
  //       $http.delete(`${FirebaseUrl}comps/${todoId}.json`)
  //       .then( (data) => {
  //         resolve(data);
  //       })
  //       .catch( (err) => {
  //         reject(err);
  //       });
  //     } else {
  //       console.log("No id passed in");
  //     }
  //   });
  // };

  // let getSingleTodoItem = (itemId) => {
  //   return $q( (resolve, reject) => {
  //     $http.get(`${FirebaseUrl}comps/${itemId}.json`)
  //     .then( (todo) => {
  //       resolve(todo.data);
  //     })
  //     .catch( (err) => {
  //       reject(err);
  //     });
  //   });
  // };

// deleteTodoItem, updateTodoStatus, getSingleTodoItem
  return { getCompList, postNewComp};
});











