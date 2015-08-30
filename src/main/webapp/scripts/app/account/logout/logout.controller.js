'use strict';

angular.module('votvotApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
