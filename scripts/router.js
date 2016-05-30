angular.module('myApp').config(function($stateProvider, $urlRouterProvider, RestangularProvider) {
    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/");

    RestangularProvider.setBaseUrl("http://foaas.com/");

    $stateProvider.state('home', {
        url: '/',
        controller: 'MainCtrl',
        templateUrl: 'views/index.html'
    })

    $stateProvider.state('operations', {
        url: '/operations',
        templateUrl: 'views/operations.html',
        resolve:{
            operations: function(Restangular){
                return Restangular.all('operations').getList().then(function(response){
                    return response;
                });
            }
        },
        controller: 'OperationsCtrl'
    })
});
