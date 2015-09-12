/**
 * Created by dongyin on 9/7/15.
 */
dialog.controller('dialogController',
    function($scope,$state,$mdDialog,loading,title,url,content,$timeout) {
    $scope.loading = loading;
        $timeout(function(){
            $scope.loading = false;
        },2000);
    $scope.dialogTitle = title;
    $scope.dialogContent = content;
    $scope.closeDialog = function () {
        $mdDialog.hide();
        $state.go(url,null, { reload: true });
    };
});