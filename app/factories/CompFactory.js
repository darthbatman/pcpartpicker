'use strict';

app.factory("CompFactory", function($q, $http, FirebaseUrl, UserFactory) {


  let comp = {
    name: "",
    description: "",
    mobo: null,
    cpu: null,
    mem: null,
    uid: UserFactory.getUser()
  };

  let setCompBasics = (compObj) => {
    comp.name = compObj.name;
    comp.description = compObj.description;
    console.log("compObj", compObj);
  };

  let setCompMobo = (compObj) => {
    comp.mobo = compObj.mobo;
    console.log("compObj", compObj);
  };

  let setCompCPU = (compObj) => {
    comp.cpu = compObj.cpu;
    console.log("compObj", compObj);
  };


  let getCompList = (userId) => {
    console.log("userId", userId);
    return $q((resolve, reject) => {
      $http.get(`${FirebaseUrl}comps.json?orderBy="uid"&equalTo="${userId}"`)
        .then((compData) => {
          resolve(compData);
        })
        .catch((err) => {
          console.log("oops", err);
          reject(err);
        });
    });
  };

  // Located in CompAddController
  let postNewComp = (newComp) => {
    return $q((resolve, reject) => {
      $http.post(`${FirebaseUrl}comps.json`,
          angular.toJson(newComp))
        .then((newCompData) => {
          console.log("compData", newCompData.data);
          resolve(newCompData.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  let updateComp = (comp) => {
    return $q((resolve, reject) => {
      let comp_Id = comp.id;
      // PUT the entire obj to FB
      if (comp_Id) {
        $http.put(`${FirebaseUrl}comps/${comp_Id}.json`,
            angular.toJson(comp))
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        console.log("No updates for you!");
      }
    });
  };

  let deleteComp = (comp_Id) => {
    console.log("userId", comp_Id);
    return $q((resolve, reject) => {
      if (comp_Id) {
        $http.delete(`${FirebaseUrl}comps/${comp_Id}.json`)
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        console.log("No id passed in");
      }
    });
  };

  let getSingleComp = (comp_Id) => {
    return $q((resolve, reject) => {
      $http.get(`${FirebaseUrl}comps/${comp_Id}.json`)
        .then((comp) => {
          resolve(comp.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  // deleteTodoItem, updateTodoStatus, getSingleTodoItem
  return {
    getCompList,
    postNewComp,
    updateComp,
    deleteComp,
    getSingleComp,
    setCompBasics,
    setCompMobo,
    setCompCPU
  };
});