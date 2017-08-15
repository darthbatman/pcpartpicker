'use strict';

app.factory("CPUFactory", function($q, $http, FirebaseUrl) {

  let currentComp_Id;
  
  // Called in MoboController
  let getCPUs = (optionValue) => {
    console.log("optionValue", optionValue);
    return $q((resolve, reject) => {
      $http.get(`http://localhost:6060/getCPUs/${optionValue}`)
        .then((cpuObj) => {
          // console.log("moboObj", moboObj.data);
          resolve(cpuObj.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };


  return {
    getCPUs
  };
});