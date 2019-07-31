import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';
import PlotHeader from "../PlotHeader/PlotHeader";

const testArr = new Array(600);
testArr.fill(4);

const Plot = ({ internetData,
                distributionData,
                traditionalData,
                traditionalDataCurrent,
                distributionDataCurrent,
                internetDataCurrent,
                labels }) => {
    const plot = useRef(null);
    const update = () => {
        new Chart(plot.current, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Традиционная энергосистема',
                    data: traditionalData,
                    borderColor: 'rgb(235, 87, 87)',
                    borderWidth: 1,
                    lineTension: 0,
                    fill: false,
                    backgroundColor: 'rgb(235, 87, 87)',
                    radius: 0
                },
                {
                    data: traditionalDataCurrent,
                    borderColor: 'rgb(235, 87, 87)',
                    borderWidth: 1,
                    lineTension: 0,
                    fill: false,
                    backgroundColor: 'rgb(235, 87, 87)',
                    radius: 3
                },
                {
                    label: 'Распределенная генерация',
                    data: distributionData,
                    borderColor: 'goldenrod',
                    borderWidth: 1,
                    lineTension: 0,
                    fill: false,
                    backgroundColor: 'goldenrod',
                    radius: 0
                },
                    {
                        data: distributionDataCurrent,
                        label: 'Текущее значение',
                        borderColor: 'goldenrod',
                        borderWidth: 1,
                        lineTension: 0,
                        fill: false,
                        backgroundColor: 'goldenrod',
                        radius: 3
                    },
                    {
                    label: 'Интернет энергии',
                    data: internetData,
                    borderColor: 'rgb(50,205,50)',
                    borderWidth: 1,
                    lineTension: 0,
                    fill: false,
                    backgroundColor: 'rgb(50,205,50)',
                    radius: 0
                },
                    {
                        data: internetDataCurrent,
                        label: 'Текущее значение',
                        borderColor: 'rgb(50,205,50)',
                        borderWidth: 1,
                        lineTension: 0,
                        fill: false,
                        backgroundColor: 'rgb(50,205,50)',
                        radius: 3
                    },
            ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: false,
                legend: {
                    display: false
                },
                tooltips: {
                    filter: function (tooltipItem) {
                        return tooltipItem.datasetIndex === 0
                            || tooltipItem.datasetIndex === 2
                            || tooltipItem.datasetIndex === 4;
                    }
                },
                layout: {
                    padding: {
                        top: 55,
                        bottom: 10,
                        right: 70,
                        left: 70
                    }
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: 'rgb(0, 0, 0, 0)',
                            zeroLineColor: 'rgb(255, 255, 255, 0.4)'
                        },
                        ticks: {
                            autoSkip: true,
                            minTicksLimit: 7,
                            maxTicksLimit: 8,
                            maxRotation: 0,
                            minRotation: 0,
                            fontColor: 'rgb(255, 255, 255, 0.8)',
                            fontFamily: "'Manrope', sans-serif",
                            fontSize: 12
                        },
                    }],
                    yAxes: [{
                        position: 'right',
                        scaleLabel: {
                            display: true,
                            labelString: 'MIPTik/кВт⋅ч',
                            fontFamily: "'Manrope', sans-serif",
                            fontColor: 'rgb(255, 255, 255, 0.8)',
                            fontSize: 12,
                        },
                        gridLines: {
                            color: 'rgb(0, 0, 0, 0)',
                            zeroLineColor: 'rgb(255, 255, 255, 0.4)'
                        },
                        ticks: {
                            min: 0,
                            stepSize: 2,
                            max: 8,
                            beginAtZero: true,
                            // mirror: true,
                            padding: 15,
                            fontFamily: "'Manrope', sans-serif",
                            fontColor: 'rgb(255, 255, 255, 0.8)',
                            fontSize: 12
                        }
                    }]
                }
            }

        })
    };
    useEffect(() => update());
    return (
        <section style={{ width: '100%', height: '25%', backgroundColor: '#283148', position: 'absolute', bottom: '0px' }}>
            <PlotHeader/>
            <canvas style={{ width: '100%', height: '25%', backgroundColor: '#283148' }} ref={plot}></canvas>
        </section>
    )
};

export default Plot;


