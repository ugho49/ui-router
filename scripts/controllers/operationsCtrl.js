angular.module('myApp').controller('OperationsCtrl', ['$scope', 'operations', function($scope, operations) {
    $scope.operations = operations;
}]);
