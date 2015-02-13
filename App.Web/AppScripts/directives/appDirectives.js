angular.module('app').directive("myComponent", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            myvalue: "=",
            text: "@",
            clickevent: "&"
        },
        template: "<div><span style='color:blue'>{{myvalue}}</span></br><button class='btn btn-primary' ng-click='clickevent()'>{{text}}</button></div>"

    };
});



angular.module('app').directive("auditPanel", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            who: "=",
            when: "="
        },
        templateUrl: "/AppScripts/directives/audit-panel.html"
    };
});

