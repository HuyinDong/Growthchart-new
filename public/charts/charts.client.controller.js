/**
 * Created by dongyin on 9/6/15.
 */
charts.controller('chartsController',
    function($scope,$http,$stateParams,$rootScope,$state,$mdDialog,chartAPI,$cookies){
     var child =  $rootScope.child;
     var childData = {};
    console.log(child);
    parseChild(child);



    function parseChild(child){
        console.log(child);
        if(child.unit == 'us'){
            childData.ktype= 1;
            childData.weight = parseInt((parseFloat(child.weight.lbs)+parseFloat(child.weight.ounces/16))/2.2046);
            childData.stature = parseInt(child.length.inches*2.54);
            childData.hc = parseInt(child.hairCircumference.inches*2.54);
        }else{
            childData.ktype= 2;
            childData.weight = parseInt(child.weight.kg);
            childData.stature = parseInt(child.length.cm);
            childData.hc = parseInt(child.hairCircumference.cm);
        }
        var age = child.birth.split(" ");
        if(age[1] == 'months' ){
            age = parseInt(age[0]);
        }else if(age[1]  == 'years'){
            age = parseInt(age[0])*12;
        }else{
            age = 1;
        }
        childData.age = age;
        child.gender == 'Boy' ? childData.gender = 1 : childData.gender = 0;

    }
    var units = {};
    var point = {};
    if(childData.ktype == 1){
        point.age = childData.age;
        point.length = parseFloat(child.length.inches);
        point.weight = parseFloat(child.weight.lbs)+parseFloat(child.weight.ounces)/16;
        point.hc = parseFloat(child.hairCircumference.inches);
        units.length = 'inches';
        units.weight = 'lbs';
    }else{
        point.age = childData.age;
        point.length = parseFloat(child.length.cm);
        point.weight = parseFloat(child.weight.kg);
        point.hc = parseFloat(child.hairCircumference.cm);
        units.length = 'cm';
        units.weight = 'kg';
    }

    var chart_1 = {
        link : {
            boy : 'data/lenageinf.csv',
            girl : 'data/lenageinf_girl.csv'
        },
        spot: [
            point.age,point.length              // weight ,age, length
        ],
        container : 'container1',
        subtitle : 'Length-for-age charts, birth to 36 months',
        ytitle : 'Length',
        ycallback : function(){
                        return this.value +units.length;
                                },
        xtitle : 'Age',
        xcallback : function(){
                return this.value + 'months';
        },
        type : 'length',
        xtickInterval : 2,
        ytickInterval : 2,
        xy : false,
        tooltip : {
            x : 'Age',
            y : 'Length'
        }
    }

    var chart_2 = {
        link : {
            boy : 'data/wtageinf.csv',
            girl : 'data/wtageinf_girl.csv'
        },
        spot: [
            point.age,point.weight              // weight ,age, length
        ],
        container : 'container2',
        subtitle : 'Weight-for-age charts, birth to 36 months',
        ytitle : 'Weight',
        ycallback : function(){
            return this.value +units.weight;
        },
        xtitle : 'Age : Months',
        xcallback : function(){
            return this.value = 'months';
        },
        type : 'weight',
        xtickInterval : 2,
        ytickInterval : 4,
        xy : false,
        tooltip : {
            x : 'Age',
            y : 'Weight'
        }
    };

    var chart_3 = {
        link : {
            boy : 'data/hcageinf.csv',
            girl : 'data/hcageinf_girl.csv'
        },
        spot: [
            point.age,point.hc              // weight ,age, length
        ],
        container : 'container3',
        subtitle : 'Head circumference-for-age charts, birth to 36 months',
        ytitle : 'Head circumference',
        ycallback : function(){
            return this.value +units.length;
        },
        xtitle : 'Age : Months',
        xcallback : function(){
            return this.value = 'months';
        },
        type : 'length',
        xtickInterval : 2,
        ytickInterval : 2,
        xy : false,
        tooltip : {
            x : 'Age',
            y : 'HC'
        }
    };

    var chart_4 = {
        link : {
            boy : 'data/wtleninf.csv',
            girl : 'data/wtleninf_girl.csv'
        },
        spot: [
            point.length,point.weight              // weight ,age, length
        ],
        container : 'container4',
        subtitle : 'Weight-for-Length charts, birth to 36 months',
        ytitle : 'Weight',
        ycallback : function(){
            return this.value +units.weight;
        },
        xtitle : 'Length',
        xcallback : function(){
            return this.value +units.length;
        },
        type : 'mixed',
        xtickInterval : 2,
        ytickInterval : 4,
        xy : true,
        tooltip : {
            x : 'Length',
            y : 'Weight'
        }
    };

    drawCharts(chart_1);
    drawCharts(chart_2);
    drawCharts(chart_3);
    drawCharts(chart_4);
        if(!child.isHistory && $cookies.get("id")){
            storeData();
        }
function storeData(){
    console.log("storeData");
    var newData = {};
    if(child.unit = 'metric'){
            newData.weight_kg = parseInt(child.weight.kg);
            newData.length_cm = parseInt(child.length.cm);
            newData.hair_circumference_cm = parseInt(child.hairCircumference.cm);
    }else{
        newData.weight_lbs = parseInt(child.weight.lbs);
        newData.weight_ounces = parseInt(child.weight.ounces);
        newData.length_inches = parseInt(child.length.inches);
        newData.hair_circumference_inches = parseInt(child.hairCircumference.inches);

    }
    newData.name = child.name;
    newData.unit = child.unit;
    newData.id = parseInt($cookies.get('id'));
    var age = child.birth.split(" ");
    if(age[1] == 'months' ){
        newData.age = parseInt(age[0]);
    }else if(age[1]  == 'years'){
        newData.age = parseInt(age[0])*12;
    }else{
        newData.age = 1;
    }
    child.gender == 'Boy' ? newData.gender = 1 : newData.gender = 0;
    console.log(newData);
    $http.get('http://webservices.onlinegrowthcharts.com/gc',
        {
            params:childData
        })
        .then(function(data){
            var bmi = data.data;
            chartAPI.insert("child",newData,function(data){
                    bmi.id = data.insertId;
                chartAPI.insert("bmi",bmi,function(data){
                });
            });
        });
}

function drawCharts(obj){
    console.log(obj.spot);
    var p5 = [];
    var p10 = [];
    var p25 = [];
    var p50 = [];
    var p75 = [];
    var p90 = [];
    var p95 = [];
    var link = [];
    var cal = [];
    if(childData.gender===1){
        link = obj.link.boy;
    }else{
        link = obj.link.girl;
    }
    cal.push(obj.spot);
    var preWei = 1;
    var preLen = 1;
    var pre = 1;
    console.log(childData.ktype);
    if(childData.ktype == 1){
        if(obj.type == 'length'){
            pre = 1/2.54;
        }else if(obj.type == 'weight'){
            pre = 2.2046;
        }else if(obj.type == 'mixed'){
            preWei =  1/2.54;
            preLen = 2.2046;
        }else{
            pre = 1;
        }
    }
    $.get(link,function(data){

        var lines = data.split('\n');
        var i = 1;

        if(!obj.xy) {
            for (i; i < lines.length - 1; i++) {
                var items = lines[i].split(',');
                p5.push((parseFloat(items[6]) * pre));		//p5
                p10.push(parseFloat(items[7]) * pre);		//p10
                p25.push(parseFloat(items[8]) * pre);		//p25
                p50.push(parseFloat(items[9]) * pre);		//p50
                p75.push(parseFloat(items[10]) * pre);		//p75
                p90.push(parseFloat(items[11]) * pre);		//p90
                p95.push(parseFloat(items[12]) * pre);		//p95
            }
        }else{
            for (i; i < lines.length - 1; i++) {
                var items = lines[i].split(',');
                p5.push([(parseFloat(items[1]) * preLen),(parseFloat(items[6]) * preWei)]);		//p5
                p10.push([(parseFloat(items[1]) * preLen),(parseFloat(items[7]) * pre)]);		//p10
                p25.push([(parseFloat(items[1]) * preLen),(parseFloat(items[8]) * pre)]);		//p25
                p50.push([(parseFloat(items[1]) * preLen),(parseFloat(items[9]) * pre)]);		//p50
                p75.push([(parseFloat(items[1]) * preLen),(parseFloat(items[10]) * pre)]);		//p75
                p90.push([(parseFloat(items[1]) * preLen),(parseFloat(items[11]) * pre)]);		//p90
                p95.push([(parseFloat(items[1]) * preLen),(parseFloat(items[12]) * pre)]);		//p95
            }
        }
        $('#'+obj.container).highcharts({
            title: {
                text: 'Growth Chart',
                x: -20 //center
            },
            subtitle: {
                text: obj.subtitle,
                x: -20
            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                formatter : function(){
                    return obj.tooltip.x+':<b>'+this.x+'</b>,'+obj.tooltip.y+':<b>'+this.y.toFixed(3)+'</b>';
                }
            },
            yAxis : [{
                title : {
                    text : obj.ytitle
                },
                tickInterval : obj.ytickInterval,
                minorTickInterval: 2,
                labels: {
                    formatter: obj.ycallback
                }
            },
                {
                    linkedTo : 0,
                    opposite : true,
                    title : {
                        text : obj.ytitle
                    },
                    labels: {
                        formatter: obj.ycallback
                    }
                }
            ],
            xAxis : {
                title : {
                    text : obj.xtitle
                },
                tickInterval : obj.xtickInterval,
                minorTickInterval : 1,
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [
                {
                    name : 'p5',
                    data : p5
                },
                {
                    name : 'p10',
                    data : p10
                },
                {
                    name : 'p25',
                    data : p25
                },
                {
                    name : 'p50',
                    data : p50
                },
                {
                    name : 'p75',
                    data : p75
                },
                {
                    name : 'p90',
                    data : p90
                },
                {
                    name : 'p95',
                    data : p95
                },
                { type: 'scatter',
                    name: 'Your baby',
                    data: cal,
                    marker: {
                        symbol : "circle",
                        enabled: true,
                        radius: 6
                    }
                }
            ]
        });
    });
}

});

/*
 formData = {
 'ktype' : parseFloat($('input[name=unitRadios]:checked').val()),
 'birthday'    :  birthday,
 'gender'             : parseFloat($('input[name=genderRadios]:checked').val()),
 'weight'             : parseFloat($('#weightlbs').val()),
 'weightounce'			: parseFloat($('#weightounce').val()),
 'stature'             : parseFloat($('#statureinch').val()),
 'hc'             : parseFloat($('#hcinch').val())
 }
 */