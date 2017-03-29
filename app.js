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
                trigger: 'item'
            },
            legend: {
                data:['蒸发量','降水量','最低气温','最高气温']
            },
            // toolbox: {
            //     show : true,
            //     feature : {
            //         mark : {show: true},
            //         dataView : {show: true},
            //         magicType : {show: true, type: ['line', 'bar']},
            //         restore : {show: true},
            //         saveAsImage : {show: true}
            //     }
            // },
            xAxis : [
                {
                    type : 'category',
                    data : [
                        '1','2','3','4','5','6','7','8','9','10','11','12'
                    ]
                }/*,*/
                // {
                //     type : 'category',
                //     data : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
                // }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLine : {    // 轴线
                        show: true,
                        lineStyle: {
                            color: 'red',
                            type: 'dashed',
                            width: 2
                        }
                    }
                },
                {
                    type : 'value',
                }
            ],
             dataZoom : {
                show : true,
                realtime : true,
                y: 36,
                height: 20,
                start : 0,
                end : 100
            },
            series : [
                {
                    name: '蒸发量',
                    type: 'bar',
                    stack:' ',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 16.7, 0, 0, 32.6, 20.0, 6.4, 3.3]/*,*/
                    // barWidth:function(option){

                    //     console.log(option)

                    //     return 2;

                        

                    // }()
                },
                {
                    name: '降水量',
                    type: 'bar',
                    stack:' ',
                    // yAxisIndex: 1,
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 20.7, 0, 0, 48.7, 18.8, 6.0, 2.3],
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var colorList = [
                                  '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                                   '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                                   '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                                ];
                                return colorList[params.dataIndex]
                            }
                        }
                    }
                },
                {
                    name: 'xxxx',
                    type: 'bar',
                    yAxisIndex: 1,
                    barMaxWidth:10,
                    data: [0, 0, 0, 0, 0, 0, 11175.6, 11182.2, 0, 0, 0, 0],
                    barWidth:2,
                    // barWidth : function(params){

                    //     // return 2;

                    //     console.log(params)

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
