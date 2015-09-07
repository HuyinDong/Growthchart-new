/**
 * Created by dongyin on 9/6/15.
 */
form.controller('formController',function($scope,$http,$stateParams,$rootScope,$state,$mdDialog){
    var child = {};
    child.unit = 'us';
    $scope.child = child;
    $rootScope.$watch(function() { return child.unit; }, function(newValue, oldValue) {
        if (newValue) {
            child.weight = {};
            child.length = {};
            child.hairCircumference = {};

        }
    });

    $scope.getChart = function(){
        var birth = moment($scope.datepicker.date.toString()).fromNow(true);
        child.birth = birth;
        $rootScope.child = $scope.child;
        console.log(child);
        $mdDialog.show({
            templateUrl: './dialog/dialog.client.view.html',
            controller : 'dialogController',
            locals : {
                loading : true,
                child : child,
                title : 'GrowthChart',
                content : 'Loading Chart',
                url : 'home.detail'
            }
        });
    }
});