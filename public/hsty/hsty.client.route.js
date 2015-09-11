/**
 * Created by dongyin on 9/10/15.
 */
hsty.config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('history',{
            url: '/history',
            templateUrl : './hsty/hsty.client.view.html',
            controller: 'hstyController'
        })
        .state('history.detail',{
            url : '/detail',
            templateUrl : './charts/charts.client.view.html',
            controller : 'chartsController'
        })
}]);