/**
 * Created by dongyin on 9/8/15.
 */
chartModule.factory('chartResource',function($resource){
    return $resource(
        '/management/data/:table/:id',{
        },{
            update : {
                method : 'put',
                isArray : false
            },
            remove : {
                method : 'delete',
                params : {}
            },
            insert : {
                method : 'post'
            },
            select : {
                method : 'get'
            }
        }
    );
});