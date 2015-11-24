var app = angular.module("myApp", []);

function myController($scope) {

    $scope.submitForm = function (isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
            alert("our form is amazing");
        }

    };

}
