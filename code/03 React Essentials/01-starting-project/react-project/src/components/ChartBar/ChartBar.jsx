import React from 'react';
import './ChartBar.css';

const ChartBar = props => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    //bar filled height is relative to that of the highest spending/value across 12 months in each year
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
