'use strict';

let app = angular.module("app", ["ngRoute"])
.constant("FirebaseUrl", "https://angularjs-f1fd4.firebaseio.com/");

let isAuth = (UserFactory) => {
  return new Promise ( (resolve, reject) => {
    UserFactory.isAuthenticated()
    .then( (userBoolean) => {
      if (userBoolean) {
      resolve();
        } else {
          reject();
        }
    });
  });
};

app.config( ($routeProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'UserController'
  })
  .when('/comp/view', {
    templateUrl: 'partials/comp.html',
    controller: 'CompController',
    resolve: {isAuth}
  })
  .when('/comp/new', {
    templateUrl: 'partials/compAddForm.html',
    controller: 'CompAddController',
    resolve: {isAuth}
  })
  .when('/socket/view', {
    templateUrl: 'partials/socket.html',
    controller: 'SocketController',
    resolve: {isAuth}
  })
  .when('/comp/:comp_Id/mobos/view/:moboSortOptions', {
    templateUrl: 'partials/mobo.html',
    controller: 'MoboController',
    resolve: {isAuth}
  })
  .when('/comp/:comp_Id/cpu/view/:moboSortOptions', {
    templateUrl: 'partials/cpu.html',
    controller: 'CPUController',
    resolve: {isAuth}
  })
  .when('/comp/:comp_Id/mem/view/', {
    templateUrl: 'partials/mem.html',
    controller: 'MemController',
    resolve: {isAuth}
  })
  .when('/comp/:comp_Id', {
    templateUrl: 'partials/comp.html',
    controller: 'CompController',
    resolve: {isAuth}
  })
  .otherwise('/');
});