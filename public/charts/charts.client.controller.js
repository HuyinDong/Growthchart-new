/**
 * Created by dongyin on 9/6/15.
 */
charts.controller('chartsController',function($scope,$http,$stateParams,$rootScope,$state,$mdDialog){
     var child =  $rootScope.child;
     var childData = {};
    console.log(child);
    parseChild(child);
    function parseChild(child){
        if(child.unit == 'us'){
            childData.ktype= 1;
            childData.weight = parseInt((parseFloat(child.weight.lbs)+parseFloat(child.weight.ounces/16))/2.2046);
            childData.stature = parseInt(child.length.inches*2.54);
            childData.hc = parseInt(child.hairCircumference.inches*2.54);
        }else{
            childData.ktype= 0;
            childData.weight = parseInt(child.weight.kg);
            childData.stature = parseInt(child.length.cm);
            childData.hc = parseInt(child.hairCircumference.cm);
        }
        var age = child.birth.split(" ");
        if(age[1] == 'months' ){
            age = age[0];
        }else if(age[1]  == 'years'){
            age = age[0]*12;
        }else{
            age = 1;
        }
        childData.age = age;
        child.gender == 'Boy' ? childData.gender = 1 : childData.gender = 0;

    }
    var obj = {
        link : {
            boy : 'data/lenageinf.csv',
            girl : 'data/lenageinf_firl.csv'
        },
        spot: [
         childData.age,childData.length              // weight ,age, length
        ],
        container : 'container1',
        subtitle : 'Length-for-age charts, birth to 36 months',
        ytitle : 'Length',
        ycallback : function(){
                            return this.value + 'cm';
                                },
        xtitle : 'Age : Months',
        xcallback : function(){
            return this.value = 'cm';
        }
    }
    drawCharts(obj);
function drawCharts(obj){
    var p3 = [];
    var p5 = [];
    var p10 = [];
    var p25 = [];
    var p50 = [];
    var p75 = [];
    var p85 = [];
    var p90 = [];
    var p95 = [];
    var p97 = [];
    var link = [];
    var cal = [];
    if(childData.gender===1){
        link = obj.link.boy;
    }else{
        link = obj.link.girl;
    }
    cal.push(obj.spot);
    $.get(link,function(data){

        var lines = data.split('\n');
        var i = 1;
        for(i; i<lines.length-1; i++){
            var items = lines[i].split(',');

            p3.push(parseFloat(items[5])	);		//p3
            p5.push(parseFloat(items[6]));		//p5
            p10.push(parseFloat(items[7]));		//p10
            p25.push(parseFloat(items[8]));		//p25
            p50.push(parseFloat(items[9]));		//p50
            p75.push(parseFloat(items[10]));		//p75
            p90.push(parseFloat(items[11]));		//p90
            p95.push(parseFloat(items[12]));		//p95
            p97.push(parseFloat(items[13]));		//p97

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
                    return 'Length:<b>'+this.y+'</b>, Age:<b>'+this.x+'</b>';
                }
            },
            yAxis : [{
                title : {
                    text : obj.ytitle
                },
                tickInterval : 2,
                minorTickInterval: 1,
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
                tickInterval : 4,
                minorTickInterval : 2,
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [
                {
                    name : 'p3',
                    data : p3
                },
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
                {
                    name : 'p97',
                    data : p97
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