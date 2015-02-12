var app = angular.module('app', ['ngRoute', 'kendo.directives','toaster']);

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
}]);