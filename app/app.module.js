(function() {
    'use strict';

    var app = angular.module('parkerbank.app', ['ngMaterial', 'ngMessages', 'ngMdIcons']);
    
    app.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
                          .primaryPalette('purple')
                          .accentPalette('pink');
    });
})();