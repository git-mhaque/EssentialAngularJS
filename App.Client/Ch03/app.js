var app = angular.module("todoApp", []);

function todoController($scope) {

    $scope.items = [
        "Call Dad",
        "Book flight"
    ];

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


}