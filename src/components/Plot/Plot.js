import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js';
import PlotHeader from "../PlotHeader/PlotHeader";

const Plot = ({ internetData, distributionData, traditionalData }) => {
    const plot = useRef(null);

    const update = () => {
        new Chart(plot.current, {
            type: 'line',
            data: {
                labels: traditionalData.labels,
                datasets: [{
                    label: 'Традиционная энергосистема',
                    data: traditionalData.data,
                    borderColor: 'goldenrod',
                    borderWidth: 3,
                    lineTension: 0,
                    fill: false,
                    backgroundColor: 'goldenrod',
                    radius: 0
                },
                {
                    data: traditionalData.last,
                    borderColor: 'goldenrod',
                    borderWidth: 3,
                    lineTension: 0,
                    fill: false,
                    backgroundColor: 'goldenrod',
                    radius: 3
                },
                {
                    label: 'Распределенная генерация',
                    data: distributionData.data,
                    borderColor: 'rgb(235, 87, 87)',
                    borderWidth: 3,
                    lineTension: 0,
                    fill: false,
                    backgroundColor: 'rgb(235, 87, 87)',
                    radius: 0
                },
                    {
                        data: distributionData.last,
                        label: 'Текущее значение',
                        borderColor: 'rgb(235, 87, 87)',
                        borderWidth: 3,
                        lineTension: 0,
                        fill: false,
                        backgroundColor: 'rgb(235, 87, 87)',
                        radius: 3
                    },
                    {
                    label: 'Интернет энергии',
                    data: internetData.data,
                    borderColor: 'rgb(50,205,50)',
                    borderWidth: 3,
                    lineTension: 0,
                    fill: false,
                    backgroundColor: 'rgb(50,205,50)',
                    radius: 0
                },
                    {
                        data: internetData.last,
                        label: 'Текущее значение',
                        borderColor: 'rgb(50,205,50)',
                        borderWidth: 3,
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
        <section style={{ minWidth: '100vw', maxHeight: '35vh', backgroundColor: '#283148' }}>
            <PlotHeader/>
            <canvas style={{ minWidth: '100vw', maxHeight: '30vh', backgroundColor: '#283148' }} ref={plot}></canvas>
        </section>
    )
}

export default Plot;


