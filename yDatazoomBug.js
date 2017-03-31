'use strict';

angular.module('questionnaireApp', ['ui.router'])
    .controller('myCtrl', ['$scope', function($scope) {

        var  data = [],
             myChart1 = null,
             start = null,
             end = null,
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
                calculable : false,
                xAxis : [
                    {
                        type : 'category',
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
                    orient:'vertical',
                    //x: 0,
                    // y: 36,
                    // width: 400,
                    // height: 20,
                    //backgroundColor: 'rgba(221,160,221,0.5)',
                    //dataBackgroundColor: 'rgba(138,43,226,0.5)',
                    //fillerColor: 'rgba(38,143,26,0.6)',
                    handleColor: 'red',
                    handleSize:0,
                    start : 0,
                    end : 10
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

        initChart();

        function initChart(){

            if(myChart1 !== null){

                console.log("not null")

                start = myChart1.component.dataZoom._zoom.start;

                end = myChart1.component.dataZoom._zoom.end;

                myChart1.setOption(option);

                myChart1.component.dataZoom.absoluteZoom({start : start, end : end })

            }else{

                require([

                    'echarts',

                    'echarts/chart/bar',

                ],function(ec) {

                    console.log("null")

                    console.log(ec)

                    myChart1 = ec.init(document.getElementById('myechartsdemo1'));

                    start = option.dataZoom.start;

                    end = option.dataZoom.end;

                    myChart1.setOption(option);

                    myChart1.component.dataZoom.absoluteZoom({start : start, end : end })

                });

            }

        }


                    
        $scope.click=function(){

            for(var i=0;i<2000;i++){

                data[i] = Math.ceil(Math.random()*500);

            }

            initChart();

        }
        

}])
