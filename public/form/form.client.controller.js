/**
 * Created by dongyin on 9/6/15.
 */
form.controller('formController',
    function($scope,$http,$stateParams,$rootScope,$state,$mdDialog,$cookies,chartAPI){
     $scope.child = {};
        $scope.child.weight = {};
        $scope.child.length = {};
        $scope.child.hairCircumference = {};
    if($cookies.get('unit')){
        $scope.child.unit = $cookies.get('unit');
    }else{
        $scope.child.unit = 'us';
    }

   /* $rootScope.$watch(function() { return $scope.child.unit; }, function(newValue, oldValue) {
        console.log("watch");
        console.log(newValue);
        console.log(oldValue);
        if (newValue !== oldValue) {
            console.log("watch2");
            $scope.child.weight = {};
            $scope.child.length = {};
            $scope.child.hairCircumference = {};

        }
    });
*/
        $scope.toggle = function(){
            $scope.child.weight = {};
            $scope.child.length = {};
            $scope.child.hairCircumference = {};
        }
    $scope.getChart = function(){
        console.log($scope.child);
        $cookies.put('unit',$scope.child.unit);
        var birth = moment($scope.datepicker.date.toString()).fromNow(true);
        $scope.child.birth = birth;

        $rootScope.child = $scope.child;

        $mdDialog.show({
            templateUrl: './dialog/dialog.client.view.html',
            controller : 'dialogController',
            locals : {
                loading : true,
                child : $scope.child,
                title : 'GrowthChart',
                content : 'Loading Chart',
                url : 'home.detail'
            }
        });
    };
});