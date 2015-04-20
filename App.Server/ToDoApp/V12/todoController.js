angular.module('todoApp').controller('todoController', function ($scope, todoService) {

    $scope.items = [];

    $scope.newItem = "";
    
    $scope.init = function() {
        $scope.items = todoService.getTasks();
    }

    $scope.newItemKeyPress = function (keyEvent) {
        if (keyEvent.which === 13) {
            $scope.addItem();
        }
    }

    $scope.addItem = function () {
        if ($scope.newItem != "") {
            $scope.items.push({ text: $scope.newItem, isDone: false });
            todoService.saveTasks($scope.items);
        }

        $scope.newItem = "";
    };

    $scope.editItem = function (index) {
        $scope.items[index].editMode = !$scope.items[index].editMode;
    };

    $scope.editItemKeyPress = function (keyEvent, index) {
        if (keyEvent.which === 13) {
            $scope.items[index].editMode = false;
            todoService.saveTasks($scope.items);
        }
    }

    $scope.removeItem = function (index) {
        $scope.items.splice(index, 1);
        todoService.saveTasks($scope.items);
    };

    $scope.itemStatusChanged = function (index) {
        console.log($scope.items[index].isDone);
        todoService.saveTasks($scope.items);
    };

    $scope.sortableOptions = {
        stop: function(e, ui) { 
            console.log("Sortable completed");
            todoService.saveTasks($scope.items);
        }
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
});