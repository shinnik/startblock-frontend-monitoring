import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js';
import PlotHeader from "../PlotHeader/PlotHeader";
import styles from './Plot.module.scss';

const Plot = ({ internetData,
                distributionData,
                traditionalData,
                traditionalDataCurrent,
                distributionDataCurrent,
                internetDataCurrent,
                labels }) => {
    const plot = useRef(null);
    const chartObject = useRef(null);
    const [resized, setResized] = useState(false);
    // console.log(internetData, 'internetData');
    // console.log(labels, 'labels');
    const update = () => {
      chartObject.current && chartObject.current.destroy();
        const chart = new Chart(plot.current, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Традиционная энергосистема',
                    data: traditionalData,
                    borderColor: 'rgb(235, 87, 87)',
                    borderWidth: 3,
                    lineTension: 0,
                    fill: false,
                    backgroundColor: 'rgb(235, 87, 87)',
                    radius: 0
                },
                {
                    label: 'Текущее значение',
                    data: traditionalDataCurrent,
                    borderColor: 'rgb(235, 87, 87)',
                    borderWidth: 3,
                    lineTension: 0,
                    fill: false,
                    backgroundColor: 'rgb(235, 87, 87)',
                    radius: 3
                },
                {
                    label: 'Распределенная генерация',
                    data: distributionData,
                    borderColor: 'goldenrod',
                    borderWidth: 3,
                    lineTension: 0,
                    fill: false,
                    backgroundColor: 'goldenrod',
                    radius: 0
                },
                    {
                        data: distributionDataCurrent,
                        label: 'Текущее значение',
                        borderColor: 'goldenrod',
                        borderWidth: 3,
                        lineTension: 0,
                        fill: false,
                        backgroundColor: 'goldenrod',
                        radius: 3
                    },
                    {
                    label: 'Интернет энергии',
                    data: internetData,
                    borderColor: 'rgb(50,205,50)',
                    borderWidth: 3,
                    lineTension: 0,
                    fill: false,
                    backgroundColor: 'rgb(50,205,50)',
                    radius: 0
                },
                    {
                        data: internetDataCurrent,
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
                        bottom: 0,
                        right: 45,
                        left: 65
                    }
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: 'rgb(0, 0, 0, 0)',
                            zeroLineColor: '#343434'
                        },
                        ticks: {
                            autoSkip: true,
                            minTicksLimit: 7,
                            maxTicksLimit: 8,
                            maxRotation: 0,
                            minRotation: 0,
                            fontColor: '#343434',
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
                            fontColor: '#343434',
                            fontSize: 12,
                        },
                        gridLines: {
                            color: 'rgb(0, 0, 0, 0)',
                            zeroLineColor: '#343434'
                        },
                        ticks: {
                            min: 0,
                            // stepSize: 2,
                            // max: 1000,
                            beginAtZero: true,
                            // mirror: true,
                            padding: 15,
                            fontFamily: "'Manrope', sans-serif",
                            fontColor: '#343434',
                            fontSize: 12
                        }
                    }]
                }
            }
        })
        chartObject.current = chart;
    };

    useEffect(() => window.onresize = () => { update(); setResized(!resized)}, [resized]);
    useEffect(() => update());
    return (
        <section className={styles['section']}>
            <PlotHeader/>
            <canvas className={styles['plot']} ref={plot}></canvas>
        </section>
    )
};

export default Plot;


