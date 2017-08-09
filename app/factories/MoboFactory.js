'use strict';

app.factory("MoboFactory", function($q, $http, FirebaseUrl) {
  let getMobos = (options) => {
    console.log(options);
    $http.get(`http://localhost:6060/getMobos/${options}`)
    .then((data) => {
      console.log(data);
    });

  };
  return {getMobos};
});