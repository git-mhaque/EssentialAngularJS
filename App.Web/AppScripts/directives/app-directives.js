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

angular.module('app').directive("submitFeedback", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            rvm: "=",
        },
        templateUrl: "/AppScripts/directives/submit-feedback.html"
    };
});

angular.module('app').directive("listEditor", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            inputText: "=",
            listItems: "",
        },
        templateUrl: "/AppScripts/directives/list-editor.html"
    };
});
