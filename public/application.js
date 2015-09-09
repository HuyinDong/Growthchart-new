/**
 * Created by dongyin on 8/22/15.
 */

var mainApplicationModule = angular.module('mainApplicationModule',
    [
        'lumx',
        'ngMaterial',
        'dialog',
        'form',
        'charts',
        'signin',
        'chartModule'
    ]);

angular.element(document).ready(function(){
   angular.bootstrap(document,['mainApplicationModule']);
});

