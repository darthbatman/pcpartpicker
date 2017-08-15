'use strict';

app.factory("MoboFactory", function($q, $http, FirebaseUrl) {
  // Needed in MemController to get mobo.maxRAM and mobo.ramSlots
  let currentComp_Id;
  
  // Called in MoboController
  let getMobos = (optionValue) => {
    console.log("optionValue", optionValue);
    return $q((resolve, reject) => {
      $http.get(`http://localhost:6060/getMobos/${optionValue}`)
        .then((moboObj) => {
          // console.log("moboObj", moboObj.data);
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