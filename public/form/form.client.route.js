/**
 * Created by dongyin on 9/6/15.
 */
form.config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home',{
            url: '/',
            templateUrl : './form/form.client.view.html',
            controller: 'formController'
        })
        .state('home.detail',{
            url : '/detail',
            templateUrl : './charts/charts.client.view.html',
            controller : './charts/charts.client.controller'
        })

}]);