'use client';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export function BarChart() {
  return <Bar data={{ labels: ['AI', 'Human'], datasets: [{ label: 'CSAT', data: [89, 78], backgroundColor: ['#22C55E', '#6366F1'] }] }} />;
}
