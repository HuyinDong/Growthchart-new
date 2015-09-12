/**
 * Created by dongyin on 8/22/15.
 */
var connection = require('../../config/mysql');
var mysql = require('mysql');

exports.selectOne = function(req,res,next){
    console.log("selectOne");
    var sql = 'select * from ?? where id = ?';
    var inserts = ["p_"+req.params["table"],req.params["id"]];
    sql = mysql.format(sql,inserts);
    call(connection,sql,req,res,next);
};


exports.selectAll = function(req,res,next){
    console.log("selectAll");
    var sql = 'select * from ??';

    var inserts = ["p_"+req.params["table"]];

    sql = mysql.format(sql,inserts);
    console.log(sql);
    call(connection,sql,req,res,next);
}

exports.insert = function(req,res,next){

    var table = 'p_'+req.params.table;
    var sql = 'insert into '+table+' set ?';
    var obj = req.body;

    delete obj['table'];
    console.log("obj:",obj);

    connection.query(sql,obj,function(err,result){
        console.log("result",result);
        if(err){
            res.send(err);
        }else{
            res.json({
                msg:'sucess',
                insertId : result.insertId
            })
        }
    });
};

exports.update = function(req,res,next){
    console.log("update");
    var table = 'p_'+req.params.table;
    var sql = 'update '+table+' set ';
    var newData = req.body;
    Object.keys(newData).forEach(function(key) {
        sql+="`"+key + "` = '"+ newData[key]+"',";
    });
    sql = sql.substring(0, sql.length - 1);
    sql+=" where id = "+req.params.id;
    connection.query(sql,function(err,rows){
       if(err){
           res.send(err);
       }else{
           res.json({
               msg:'sucess'
           })
       }
    });
}

exports.delete = function(req,res,next){
    console.log("delete");
    var table = 'p_'+req.params.table;
    var arr = [];
    arr.push(parseInt(req.params.id));
    var sql = 'delete from '+table+' where id = ?';
    console.log("delete",sql);
    connection.query(sql,arr,function(err,result){
        if(err){
            res.send(err);
        }else{
            res.json({
                msg:'sucess'
            })
        }
    });
}



function call(connection,query,req,res,next){
    connection.query(query,function(err,rows){
        console.log(rows);
        res.json(rows);

    });
}