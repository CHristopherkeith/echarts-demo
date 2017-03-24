'use strict';

angular.module('questionnaireApp', ['ui.router'])
    .controller('myCtrl', ['$scope', function($scope) {

        var  data = [],
             xAxisData = [];

        for(var i=0;i<2000;i++){

            xAxisData[i] = i;

            data[i] = Math.ceil(Math.random()*500);

        }

        // console.log(xAxisData)

        // console.log(data)

        var option = {
                tooltip : {
                    trigger: 'axis'
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        // data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                        data:xAxisData
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                dataZoom : {
                    show : true,
                    realtime : true,
                    //orient: 'vertical',   // 'horizontal'
                    //x: 0,
                    y: 36,
                    // width: 400,
                    height: 20,
                    //backgroundColor: 'rgba(221,160,221,0.5)',
                    //dataBackgroundColor: 'rgba(138,43,226,0.5)',
                    //fillerColor: 'rgba(38,143,26,0.6)',
                    //handleColor: 'rgba(128,43,16,0.8)',
                    // xAxisIndex:[1],
                    //yAxisIndex:[],
                    start : 0,
                    end : 100
                },

                series : [
                    {
                        name:'数量',
                        type:'bar',
                        itemStyle:{
                           normal:{
                            color:"steelblue"
                           } 
                        },
                        // data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                        data:data
                        // markPoint : {
                        //     data : [
                        //         {type : 'max', name: '最大值'},
                        //         {type : 'min', name: '最小值'}
                        //     ]
                        // }/*,*/
                        // markLine : {
                        //     data : [
                        //         {type : 'average', name: '平均值'}
                        //     ]
                        // }
                    }
                ]
            };
                    

        require([
            'echarts',
            'echarts/chart/bar',
            // 'echarts/chart/line',
        ],function(ec) {
            console.log(ec)
            var myChart1 = ec.init(document.getElementById('myechartsdemo1'));
            myChart1.setOption(option);
        });

}])
