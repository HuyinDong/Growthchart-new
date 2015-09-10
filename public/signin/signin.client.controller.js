/**
 * Created by dongyin on 9/7/15.
 */
signin.controller('signinController',
    function($scope,$http,$stateParams,$rootScope,$state,$mdDialog,$cookies,$auth){

    $scope.person = {};
        if($cookies.get('username')){
            $('#profile').show();
            $('#toin').hide();
            $scope.name = $cookies.get('username');
        }
    $scope.signin = function(){
        console.log("signin");
        $http.post('/login',{username:$scope.person.email,password:$scope.person.password}).then(function(data){
            if($cookies.get('username')){
                $('#profile').show();
                $('#toin').hide();
                $scope.name = $cookies.get('username');
            }
        });
    };

        $scope.authenticate = function(provider) {
            $auth.authenticate(provider);
        };

    $('#toin').mouseenter(function () {
        $('#sign').show();
    });
    $('#toin').mouseleave(function () {
        $('#sign').hide();
    });

    });