import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function LineDemo({ inputValue, monthlyBalance }) {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    const numMonths = Math.ceil(monthlyBalance / inputValue);
    const labels = Array.from({ length: numMonths + 1 }, (_, i) => i); // Adjusted to include the final month

    const dataValues = labels.map((_, i) => {
      const value = monthlyBalance - (inputValue * i);
      return Math.max(0, value);
    });

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Balance Over Time',
          data: dataValues,
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4,
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, [inputValue, monthlyBalance]);

  return (
    <div className="card" style={{ width:"100%" }}>
      <Chart type="line" data={chartData} options={chartOptions} />
    </div>
  );
}
