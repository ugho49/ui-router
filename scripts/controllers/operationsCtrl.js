angular.module('myApp').controller('OperationsCtrl', ['$scope', 'operations', function($scope, operations) {
    console.log('OperationsCtrl');
    // Assign operations to scope
    $scope.operations = operations;
}]);
