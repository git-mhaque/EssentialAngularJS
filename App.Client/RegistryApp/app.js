var app = angular.module('regApp', ['ngRoute']);


angular.module('regApp').config(['$routeProvider', 
    function ($routeProvider) {

        $routeProvider.
            when('/PatientHome/:pid', {
                templateUrl: 'patientHome.html',
                controller: 'patientHomeController'
            }).
            when('/PatientHome/Summary/:pid', {
                templateUrl: 'summary.html',
                controller: 'summaryController'
            }).
            when('/PatientHome/Baseline/:pid', {
                templateUrl: 'baseline.html',
                controller: 'baselineController'
            }).
            when('/PatientHome/Demographic/:pid', {
                templateUrl: 'demographic.html',
                controller: 'demographicController'
            }).
            when('/', {
                templateUrl: 'home.html',
                controller: 'homeController'
            }).
            otherwise({
                redirectTo: '/'
            });

    }]);


angular.module('regApp').controller('mainController', function ($scope) {
    $scope.message = 'Main';
    $scope.patientSelected = true;
});


angular.module('regApp').controller('homeController', function ($scope) {
    $scope.message = 'Home';
});

angular.module('regApp').controller('patientHomeController', function ($scope, $routeParams) {
    $scope.message = 'Patient Home ' + $routeParams.pid;
});



angular.module('regApp').controller('demographicController', function ($scope, $routeParams) {
    $scope.message = 'Demographic ' + $routeParams.pid;
});

angular.module('regApp').controller('baselineController', function ($scope, $routeParams) {
    $scope.message = 'Baseline ' + $routeParams.pid;
});

angular.module('regApp').controller('summaryController', function ($scope, $routeParams) {
    $scope.message = 'Summary ' + $routeParams.pid;
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
