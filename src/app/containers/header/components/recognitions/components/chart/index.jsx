import React from 'react';
import {Doughnut} from 'react-chartjs';

export const DoughnutChart = ({chartData}) => {
    const chartOptions = {
        percentageInnerCutout: 85,
        borderWidth: 0,
        responsive: true
    };
    return (
        <Doughnut data={chartData} options={chartOptions} height="150"/>
    );
};
