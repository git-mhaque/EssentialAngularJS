var app = angular.module('todoApp', ['kendo.directives']);

function todoController($scope) {

    $scope.items = ["Shopping", "Book flight", "Call Dad", "Catchup with Mash", "Create an angular app"];

    $scope.newItem = "";

    $scope.newItemKeyPress = function (keyEvent) {
        if (keyEvent.which === 13) {
            $scope.addItem();
        }
    }

    $scope.addItem = function () {
        if ($scope.newItem != "") {
            $scope.items.push($scope.newItem);
        }

        $scope.newItem = "";
    };

    $scope.isEmptyList = function () {
        return $scope.items.length == 0;
    };

}