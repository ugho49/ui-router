angular.module('myApp').config(function($stateProvider, $urlRouterProvider, RestangularProvider) {
    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/");

    RestangularProvider.setBaseUrl("http://foaas.com/");

    RestangularProvider.setDefaultHeaders({'Content-Type' : 'application/json'});

    _.contains = _.includes;

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

    $stateProvider.state('birthday', {
        url: '/birthday',
        templateUrl: 'views/birthday.html',
        resolve:{
            birthday: function(Restangular){
                return Restangular.one('bday/baby/Ugho').get().then(function(response){
                    return response;
                });
            }
        },
        controller: 'BirthdayCtrl'
    })

    $stateProvider.state('birthday.age', {
        url: '/age',
        templateUrl: 'views/age.html',
        controller: 'AgeCtrl'
    })
});
