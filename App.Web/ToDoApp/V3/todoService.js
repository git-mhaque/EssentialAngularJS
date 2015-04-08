
angular.module('todoApp').factory('todoService', function () {
    var factory = {};

    factory.getTasks = function () {

        var tasks = [
            { text: "Shopping", isDone: false, editMode: false },
            { text: "Book flight", isDone: false, editMode: false },
            { text: "Call Dad", isDone: false, editMode: false },
            { text: "Create an angular app", isDone: true, editMode: false },
        ];

        //factory.saveTasks(tasks);

        var tasks = JSON.parse(localStorage["LOCAL_DATA"]);

        return tasks;
    };

    factory.saveTasks = function (tasks) {
        localStorage["LOCAL_DATA"] = JSON.stringify(tasks);
    };



    return factory;
});