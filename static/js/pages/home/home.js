'use strict';

// page_home
define(['../../func'], function (func) {
    var page_home = {
        init: function () {
            console.log("==this is page_home==");
            window.XD.angular.apptest = angular.module('test', []);
            console.log(window.XD.angular.apptest)
            window.XD.angular.apptest.run();
        }
    };
    return page_home;
});