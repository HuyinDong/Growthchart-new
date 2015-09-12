/**
 * Created by dongyin on 9/10/15.
 */
test.config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('test',{
            url: '/test',

            controller: 'testController'
        })

}]);