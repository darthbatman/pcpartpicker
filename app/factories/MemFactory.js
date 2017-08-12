'use strict';

app.factory("MemFactory", function($q, $http, FirebaseUrl) {

  let currentComp_Id;
  
  let getMem = (optionValue) => {
    console.log("optionValue", optionValue);
    return $q((resolve, reject) => {
      $http.get(`http://localhost:6060/getMem/${optionValue}`)
        .then((memObj) => {
          resolve(memObj.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };


  return {
    getMem
  };
});