'use strict';

app.factory("MoboFactory", function($q, $http, FirebaseUrl) {

  let getMobos = (optionValue) => {
    console.log("optionValue", optionValue);
    return $q((resolve, reject) => {
      $http.get(`http://localhost:6060/getMobos/${optionValue}`)
        .then((moboObj) => {
          resolve(moboObj.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  return {
    getMobos
  };
});