var app = angular.module('ui-router', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: '/home',
    templateUrl: 'html/home.html',
    controller: 'MainController'
  })
  .state('app.nested', {
    url: '/anotherPage',
    templateUrl: 'html/nested.html',
    controller: 'MainController'
  })
  .state('app.nested.anotherNested', {
    url: '/anotherNested',
    templateUrl: 'html/anotherNested.html',
    controller: 'MainController'
  })
  .state('app.nested.views', {
    views: {
      'view1': {
        templateUrl: 'html/view1.html',
        controller: 'MainController'
      },
      'view2': {
        templateUrl: 'html/view2.html',
        controller: 'MainController'
      },
      'view3': {
        templateUrl: 'html/view3.html',
        controller: 'MainController'
      }
    }
  });
  $urlRouterProvider.otherwise('/home');
});

app.controller('MainController', function($scope, $state) {

});
