var app = angular.module('todoApp', ['kendo.directives']);

function todoController($scope) {

    $scope.items = [
        { text: "Shopping", isDone: false},
        { text: "Book flight", isDone: false},
        { text: "Call Dad", isDone: false},
        { text: "Catchup with Mash", isDone: false},
        { text: "Create an angular app", isDone: true},
    ];

    $scope.newItem = "";

    $scope.newItemKeyPress = function (keyEvent) {
        if (keyEvent.which === 13) {
            $scope.addItem();
        }
    }

    $scope.addItem = function () {
        if ($scope.newItem != "") {
            $scope.items.push({ text: $scope.newItem, isDone: false });
        }

        $scope.newItem = "";
    };

    $scope.isEmptyList = function () {
        return $scope.items.length == 0;
    };

}