(function () {
    'use strict';

    angular
        .module('parkerbank.app')
        .service('StaffService', StaffService);

    StaffService.$inject = ['$http'];

    function StaffService($http) {
        var self = this;
        var staffUrl = 'http://localhost:3000/staff_members';

        // Interface of staff service operations.
        self.getAllStaffMembers = getAllStaffMembers;

        /////////// Servive implementation goes bellow //////////////

        /*
         * Get all staff member details.
         */
        function getAllStaffMembers() { 
            return $http.get(staffUrl)
                        .then(getDataCallback);

            // Get data success callback.
            function getDataCallback(response, status, headers, config) {
                return response.data;
            }
        }
    }
})();