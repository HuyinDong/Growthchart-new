/**
 * Created by dongyin on 9/10/15.
 */
hsty.controller('hstyController',function($scope,$state,chartAPI,$cookies,$rootScope,$mdDialog){

    $scope.goHistory = function(){
        $state.go('history');
    }
    var id = $cookies.get("id");
    console.log(id);
    chartAPI.selectOne("child",id,function(data){
        $scope.childData = data;
    });

    $scope.getChart = function(child){
        console.log(child);
        var newData = {};
        newData.weight = {};
        newData.length = {};
        newData.hairCircumference = {};
        newData.unit = child.unit;
        if(child.unit == 'metric'){
            newData.length.cm = child.length_cm;
            newData.weight.kg = child.weight_kg;
            newData.hairCircumference = child.hair_circumference_cm;
        }else{
            newData.length.inches = child.length_inches;
            newData.weight.lbs = child.weight_lbs;
            newData.weight.ounces = child.weight_ounces;
            newData.hairCircumference = child.hair_circumference_inches;
        }
        newData.name = child.name;
        newData.birth = child.age+" months";
        if(child.gender == 1){
            newData.gender = "Boy";
        }else{
            newData.gender = "Girl";
        }
        newData.isHistory = true;
        $rootScope.child = newData;
        console.log(newData);
        $mdDialog.show({
            templateUrl: './dialog/dialog.client.view.html',
            controller : 'dialogController',
            locals : {
                loading : true,
                child : newData,
                title : 'GrowthChart',
                content : 'Loading Chart',
                url : 'history.detail'
            }
        });
    }
});