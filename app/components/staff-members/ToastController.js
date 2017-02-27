(function () {
    'use strict';

    angular
        .module('parkerbank.app')
        .controller('ToastController', ToastController);

    ToastController.inject = ['$mdToast'];

    function ToastController($mdToast) {
        var vm = this;
        vm.closeToast = closeToast;

        /**
         * Close the toast.
         */
        function closeToast(){
            $mdToast.hide();
        }
    }
})();