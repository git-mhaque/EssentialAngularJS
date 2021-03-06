﻿var app = angular.module("todoApp", []);

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

    $scope.removeItem = function (index) {
        $scope.items.splice(index, 1);
    };


    $scope.isEmptyList = function () {
        return $scope.items.length == 0;
    };

    $scope.getProgress = function () {
        var completedCount = 0;
        var listSize = $scope.items.length;

        for (i = 0; i < listSize; i++) {
            if ($scope.items[i].isDone) {
                completedCount++;
            }
        }

        return Math.round((completedCount * 100) / listSize);
    };
}