import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Deposit',
        data: [300, 200, 400, 350, 450, 300, 400],
        backgroundColor: '#396AFF',
        borderRadius: 10,
        barThickness: 15,
      },
      {
        label: 'Withdraw',
        data: [200, 150, 300, 250, 350, 200, 300],
        backgroundColor: '#000000',
        borderRadius: 10,
        barThickness: 15,
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
        enabled: true,
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#666666',
        },
        stacked: false,
      },
      y: {
        beginAtZero: true,
        max: 500,
        grid: {
          drawBorder: false,
          color: '#e0e0e0',
        },
        ticks: {
          stepSize: 100,
          color: '#666666',
        },
      },
    },
    barPercentage: 0.5,
    categoryPercentage: 0.8,
  };

  return (
    <div
      className="bar-chart-container"
      style={{
        width: '100%',
        maxWidth: '35rem',
        height: '250px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#396AFF',
              borderRadius: '50%',
            }}
          />
          <span style={{ fontSize: '12px', color: '#666666' }}>Deposit</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#000000',
              borderRadius: '50%',
            }}
          />
          <span style={{ fontSize: '12px', color: '#666666' }}>Withdraw</span>
        </div>
      </div>

      <Bar data={data} options={options} />

      <style>
        {`
          .bar-chart-container {
            width: 100%; /* Make the chart container responsive */
            max-width: 35rem; /* Max width of the chart */
            height: 250px;
            margin: 0 auto;
            position: relative;
          }

          @media (max-width: 800px) {
            .bar-chart-container {
              width: 100% !important; /* Ensure the chart takes full width on smaller screens */
              height: 200px; /* Optionally adjust the height for smaller screens */
            }

            /* Adjusting margin or other properties if needed */
            .bar-chart-container {
              margin: 0 1rem; /* Optional: add some margin to ensure it looks good on small screens */
            }
          }
        `}
      </style>
    </div>
  );
};

export default BarChart;
