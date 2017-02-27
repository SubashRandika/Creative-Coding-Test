(function () {
    'use strict';

    angular
        .module('parkerbank.app')
        .factory('loggerFactory', loggerFactory);

    loggerFactory.$inject = ['$log'];

    function loggerFactory($log) {
        // loggerFactory interface.
        var service = {
            error   : error,
            info    : info,
            success : success,
            warning : warning,
            // Straight to console.
            log     : $log.log
        };

        return service;

        /////////// Factory implementation goes bellow //////////////

        function error(message, data) {
            $log.error('Error: ' + message, data);
        }

        function info(message, data) {
            $log.info('Info: ' + message, data);
        }

        function success(message, data) {
            $log.info('Success: ' + message, data);
        }

        function warning(message, data) {
            $log.warn('Warning: ' + message, data);
        }
    }
})();