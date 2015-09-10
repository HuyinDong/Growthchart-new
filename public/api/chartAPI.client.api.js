/**
 * Created by dongyin on 9/8/15.
 */
chartModule.factory('chartAPI',['chartResource',
    function(chartResource) {
        return {
            selectOne: function (table, id,callback) {
                chartResource.query({table: table, id: id}, function (result) {
                    callback(result);
                });
            },

            selectAll: function (table,callback) {
                chartResource.query({table: table}, function (result) {
                    callback(result);
                });
            },

            update: function (table, id, object,callback) {
                chartResource.query({table: table, id: id}, function (result) {
                    var keys = Object.keys(object);
                    for(var i = 0 ; i< keys.length;i++){
                        result[0][keys[i]] = object[keys[i]];
                    }
                    chartResource.update({table: table, id:id}, result[0], function (data) {
                        callback(data);
                    });
                });

            },

            insert: function (table, object,callback) {
                var entry = new chartResource();
                var keys = Object.keys(object);
                for(var i = 0 ; i< keys.length;i++){
                    entry[keys[i]] = object[keys[i]];
                }
                chartResource.save({table: table}, entry, function (data) {
                    callback(data);
                });
            },

            delete: function (table, id,callback) {
                chartResource.remove({table: table, id: id},function(data){
                    callback(data);
                });

            }
        }
    }]);