
angular.module('todoApp').factory('todoService', function () {
    var factory = {};

    factory.getTasks = function () {
        var tasks = [];

        if (localStorage["LOCAL_DATA"]) {
            tasks = JSON.parse(localStorage["LOCAL_DATA"]);
        }

        return tasks;
    };

    factory.saveTasks = function (tasks) {
        localStorage["LOCAL_DATA"] = JSON.stringify(tasks);
    };

    return factory;
});