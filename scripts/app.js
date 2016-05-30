angular.module('myApp', ['ui.router']);

angular.module('myApp').config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/birth");
    //
    // Now set up the states
    $stateProvider
    .state('birth', {
        url: "/birth",
        template: "<div>birth <div ui-view></div></div>",
    })
    .state('birth.childhood', {
        url: "/childhood",
        template: "<div>childhood <div ui-view></div></div>"
    })
    .state('birth.childhood.study', {
        url: "/study",
        template: "<div>study <div ui-view></div></div>"
    })
    .state('birth.childhood.carreer', {
        url: "/carreer",
        template: "<div>carreer <div ui-view></div></div>"
    })
    .state('birth.childhood.study.PhD', {
        url: "/PhD",
        template: "<div>PhD <div ui-view></div></div>"
    })
    .state('birth.childhood.carreer.workingLife', {
        url: "/workingLife",
        template: "<div>workingLife <div ui-view></div></div>"
    })
    .state('birth.childhood.carreer.workingLife.pension', {
        url: "/pension",
        template: "<div>pension <div ui-view></div></div>"
    })
    .state('birth.childhood.carreer.workingLife.pension.death', {
        url: "/death",
        template: "<div>death <div ui-view></div></div>"
    });
});
