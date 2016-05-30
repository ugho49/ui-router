angular.module('myApp').controller('BirthdayCtrl', ['$scope', 'birthday', function($scope, birthday) {
    $scope.birthday = birthday;
}]);
