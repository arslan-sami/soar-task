import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, ChartDataLabels);

const PolarAreaChart = () => {
  const data = {
    labels: ['Entertainment', 'Investment', 'Bill Expense', 'Others'],
    datasets: [
      {
        label: 'Expense Breakdown',
        data: [30, 20, 15, 35],
        backgroundColor: [
          '#343C6A',
          '#396AFF',
          '#FC7900',
          '#232323',
        ],
        borderWidth: 8,
        borderColor: '#ffffff',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return `${value}%\n${label}`;
        },
        color: '#ffffff',
        font: {
          size: 10,
          weight: 'bold',
        },
        textAlign: 'center',
        align: 'center',
        padding: 5,
        clip: true,
      },
    },
    scales: {
      r: {
        startAngle: -45,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div
      style={{
        width: '300px',
        height: '300px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default PolarAreaChart;
