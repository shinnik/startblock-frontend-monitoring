import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js';
import generateMock from '../../helpers/generateMockPlotData';
import PlotHeader from "../PlotHeader/PlotHeader";

const mockOffset3 = generateMock(3);
const mockOffset5 = generateMock(5, 1.5);
const mockOffset6 = generateMock(6);

Chart.plugins.register({
    beforeDraw: function (chart) {
        if (chart.config.data.datasets[0].labelColor) {
            let legends = chart.legend.legendItems;
            legends.forEach(function (e, i) {
                e.fillStyle = chart.config.data.datasets[i].labelColor;
                e.strokeStyle = chart.config.data.datasets[i].labelColor;
            });
        }
    }
});

const Plot = () => {
    const plot = useRef(null);

    const update = () => {
        console.log(plot);
        new Chart(plot.current, {
            type: 'line',
            data: {
                labels: mockOffset3.labels,
                datasets: [{
                    label: 'Традиционная энергосистема',
                    data: mockOffset3.data,
                    borderColor: 'goldenrod',
                    borderWidth: 3,
                    lineTension: 0,
                    fill: false,
                    backgroundColor: 'goldenrod',
                    radius: 0
                },
                {
                    label: 'Распределенная генерация',
                    data: mockOffset5.data,
                    borderColor: 'rgb(235, 87, 87)',
                    borderWidth: 3,
                    lineTension: 0,
                    fill: false,
                    backgroundColor: 'rgb(235, 87, 87)',
                    radius: 0
                }, {
                    label: 'Интернет энергии',
                    data: mockOffset6.data,
                    borderColor: 'rgb(50,205,50)',
                    borderWidth: 3,
                    lineTension: 0,
                    fill: false,
                    backgroundColor: 'rgb(50,205,50)',
                    radius: 0
                }
            ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                layout: {
                    padding: {
                        top: 50,
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
                            maxTicksLimit: 7,
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
                            labelString: 'MIPTik/кВт⋅ч ',
                            fontFamily: "'Manrope', sans-serif",
                            fontColor: 'rgb(255, 255, 255, 0.8)',
                            fontSize: 12
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
    useEffect(() => update(), []);

    return (
        <section style={{ minWidth: '100vw', maxHeight: '35vh', backgroundColor: '#283148' }}>
            <PlotHeader/>
            <canvas style={{ minWidth: '100vw', maxHeight: '30vh', backgroundColor: '#283148' }} ref={plot}></canvas>
        </section>
    )
}

export default Plot;


