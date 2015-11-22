angular.module("schedulerApp").controller("schedulerController", function ($scope) {

    $scope.visitItemClicked = function (e) {
        var start = e.start; //selection start date
        var end = e.end; //selection end date
        var slots = e.slots; //list of selected slots
        var events = e.events; //list of selected Scheduler events

        var message = "change:: selection from {0:g} till {1:g}";

        if (events.length) {
            message = "The selected visit is: " + events[events.length - 1].title + " " + events[events.length - 1].id;
            console.log(kendo.format(message, start, end));
        }
    }

    $scope.schedulerOptions = {
        selectable: true,
        views: ["month", "week", "day"],
        editable: {
            destroy: false,
            update: false,
            move: false,
            create: false,
            resize: false
        },
        allDaySlot: false,
        change: $scope.visitItemClicked,
        showWorkHours: true
    };

    $scope.populateAppointments = function () {
        var preBookingDate = "2015-02-15";

        var data = [{
            id: 1,
            start: kendo.parseDate(preBookingDate + "T08:15"),
            end: kendo.parseDate(preBookingDate + "T09:00"),
            title: "Visit 1 - John Smith"
        }, {
            id: 2,
            start: kendo.parseDate(preBookingDate + "T09:15"),
            end: kendo.parseDate(preBookingDate + "T10:00"),
            title: "Visit 2 - Rob Taylor"
        }, {
            id: 3,
            start: kendo.parseDate(preBookingDate + "T10:15"),
            end: kendo.parseDate(preBookingDate + "T11:00"),
            title: "Visit 2 - Marry Smith"
        }, {
            id: 4,
            start: kendo.parseDate(preBookingDate + "T11:15"),
            end: kendo.parseDate(preBookingDate + "T12:00"),
            title: "Visit 2 - Bob Dilan"
        }];


        $scope.myScheduler.date(new Date(preBookingDate));
        $scope.myScheduler.dataSource.data(data);
    }

});