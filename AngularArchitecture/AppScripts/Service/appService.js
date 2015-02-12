
angular.module('app').factory('appService', function ($http, $q, $location) {
    var factory = {};
    var absUrl = $location.absUrl();
    var baseApiUrl = ((absUrl.indexOf("/", 7) > 0)? absUrl.substring(0, absUrl.indexOf("/", 7)) : absUrl) + "/service/";

    factory.prepareGetPromise = function(uri) {
        return $http.get(baseApiUrl + uri).then(
            function (response) {
                if (typeof response.data === 'object') {
                    return response.data;
                } else {
                    return $q.reject(response.data);
                }
            },
            function (response) {
                console.log("Communication error");
                alert("Communication error");
                return $q.reject(response.data);
            });
    }

    factory.preparePostPromise = function (uri, data) {
        return $http.post(baseApiUrl + uri, data).then(
            function (response) {
                if (typeof response.data === 'object') {
                    return response.data;
                } else {
                    return $q.reject(response.data);
                }
            },
            function (response) {
                console.log("Communication error");
                alert("Communication error");
                return $q.reject(response.data);
            });
    }


    factory.getProjectList = function () {
        return factory.prepareGetPromise("GetProjectList");
    };
        
    factory.getProjectByID = function (projectID) {
        return factory.prepareGetPromise("GetProjectByID?projectID=" + projectID);
    };

    factory.saveProject = function (projectVM) {
        return factory.preparePostPromise("SaveProject", projectVM);
    };



    return factory;
});