import React from 'react';
import Chart from '../Chart/Chart.jsx';

/*
💥 *Global Variables (Not Component-scoped Variables) will be REMEMBERED in the custom Component Func Scope (& can be updated or accumulated by each Component Render)

💥 *Component-scoped Variables will be REMEMBERED by using [🔸useState hook]
*/
let count = 0;

const ExpensesChart = props => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  console.log(chartDataPoints);
  console.log('count:', ++count);

  for (const expense of props.expenses) {
    const curExpenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[curExpenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
