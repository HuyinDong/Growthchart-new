/**
 * Created by dongyin on 9/6/15.
 */
form.controller('formController',
    function($scope,$http,$stateParams,$rootScope,$state,$mdDialog,$cookies,chartAPI){

        $scope.child = {};
        $scope.child.weight = {};
        $scope.child.length = {};
        $scope.child.hairCircumference = {};
        $scope.child.isHistory = false;
    if($cookies.get('unit')){
        $scope.child.unit = $cookies.get('unit');
    }else{
        $scope.child.unit = 'us';
    }

        $scope.overAge = false;

            $rootScope.$watch(function() { return $scope.datepicker.date; }, function (newValue, oldValue) {
                    if ( typeof oldValue !== 'undefined' || oldValue !== newValue) {
                        var birth = moment($scope.datepicker.date.toString()).fromNow(true);
                        var age = birth.split(" ");
                        if (age[1] == 'months') {
                            age = parseInt(age[0]);
                        } else if (age[1] == 'years') {
                            age = parseInt(age[0]) * 12;
                        } else {
                            age = 1;
                        }
                        if (parseInt(age) > 24) {
                            $scope.overAge = true;
                        }else{
                            $scope.overAge = false;
                        }
                }
    });

        $scope.toggle = function(){
            $scope.child.weight = {};
            $scope.child.length = {};
            $scope.child.hairCircumference = {};
        }
    $scope.getChart = function(){
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


    $scope.validation = {
        gender : function(){
            if($scope.child.gender == null){
                return false;
            }
        }
    }
});