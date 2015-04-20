var app = angular.module('regApp', []);


angular.module('regApp').config(['$routeProvider',
    function ($routeProvider) {

        $routeProvider.
            when('/Demographic/:pid', {
                templateUrl: 'demographic.html',
                controller: 'demographicController'
            }).
            when('/Baseline/:pid', {
                templateUrl: 'baseline.html',
                controller: 'baselineController'
            }).
            otherwise({
                redirectTo: '/Demographic/:pid'
            });


    }]);


angular.module('regApp').controller('mainController', function ($scope) {
    $scope.message = 'Main';
});

angular.module('regApp').controller('demographicController', function ($scope, $routeParams) {
    $scope.message = 'Demographic ' + $routeParams.pid;
});

angular.module('regApp').controller('baselineController', function ($scope, $routeParams) {
    $scope.message = 'Baseline ' + $routeParams.pid;
});

//angular.module('regApp').controller('diagnosisController', function ($scope) {
//    $scope.message = 'Diagnosis';
//});

//angular.module('regApp').controller('treatmentController', function ($scope) {
//    $scope.message = 'Treatment';
//});

//angular.module('regApp').controller('followupController', function ($scope) {
//    $scope.message = 'Follow-up';
//});

//angular.module('regApp').controller('outcomeController', function ($scope) {
//    $scope.message = 'Outcome';
//});
