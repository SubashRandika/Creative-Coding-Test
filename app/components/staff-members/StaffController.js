(function () {
    'use strict';

    angular
        .module('parkerbank.app')
        .controller('StaffController', StaffController);

    StaffController.$inject = ['StaffService', 'loggerFactory', '$mdSidenav', '$mdToast', '$window'];

    /**
     * Main Controller for the Parker Bank internation staff profile App.
     * @param StaffService Staff data retrieval service
     * @param loggerFactory logging factory service
     * @param $mdSidenav 
     * @constructor Constructor function
     */
    function StaffController(StaffService, loggerFactory, $mdSidenav, $mdToast, $window) {
        var vm = this;
        vm.staffMembers = [];
        vm.appointment = {};
        vm.selectedMember = null;
        vm.isFabOpen = false;
        vm.isSelected = false;
        vm.selectedMemberIndex = 0;
        vm.selectStaffMember = selectStaffMember;
        vm.toggleMemberList = toggleMemberList;
        vm.toggleSelection = toggleSelection;
        vm.openSideMenu = openSideMenu;
        vm.navigateTo = navigateTo;
        vm.desiredDate = new Date();
        vm.currentTime = new Date().getTime();

        activate();

        /**
         * Initial execution function on page load.
         */
        function activate() {
            return StaffService.getAllStaffMembers().then(function (data) {
                vm.staffMembers = data;
                vm.selectedMember = data[0];
                loggerFactory.info('Staff Members: ', data);
            }, function (err) {
                loggerFactory.error('Get Staff Members: ', err);
            });
        }

        /**
         * Select the current staff member.
         * @param memberId
         */
        function selectStaffMember(member, index) {
            vm.isSelected = false;
            vm.selectedMemberIndex = index;
            vm.selectedMember = angular.isDefined(member) ? member : vm.staffMembers[0];
            if (!$mdSidenav('left').isLockedOpen()) {
                $mdSidenav('left').close();
            }
        }

        /**
         * Hide or Show the 'left' SideNav when small screen.
         */
        function toggleMemberList() {
            $mdSidenav('left').toggle();
        }

        function toggleSelection() {
            vm.isSelected = !vm.isSelected;
            if(vm.isSelected){
                showFavoriteToast();
            }
        }

        /**
         * Open the side menu when small screen.
         */
        function openSideMenu($mdMenu, event) {
            $mdMenu.open(event);
        }

        /**
         * Open favorite selected tooltip.
         */
        function showFavoriteToast() {
            $mdToast.show({
                hideDelay: 3000,
                position: 'top right',
                controller: 'ToastController',
                controllerAs: 'toast',
                templateUrl: 'fav_toast_template.html',
                bindToController: true
            });
        }

        /**
         * Go to requested URL..
         * @param url
         */
        function navigateTo(url){
            $window.open(url, '_blank');
        }
    }
})();