'use strict';

angular.module('votvotApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


