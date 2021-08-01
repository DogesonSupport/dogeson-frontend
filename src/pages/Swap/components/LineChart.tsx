import React from 'react'
import Chart from 'react-apexcharts'

export interface LineChartProps {
  data?: Array<any>;
  categories?: Array<string>;
  width?: number | string;
  height?: number | string;
}
const LineChart: React.FC<LineChartProps> = ({
  categories = [],
  data = [],
  width = 500,
  height = 200,
}) => {

  const options = {
    chart: {
      height,
      toolbar: {
        show: false
      }
    },
    colors: ['#77B6EA', '#545454'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
      curve: 'smooth' as any
    },
    grid: {
      borderColor: 'rgba(255, 255, 255, 0.1)',
      row: {
        colors: ['rgba(0, 0, 0, 0.4)'],
      },
    },
    markers: {
      size: 1
    },
    xaxis: {
      categories,
      axisBorder: {
        color: 'rgba(255, 255, 255, 0.1)'
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      min: 5,
      max: 40
    },
  };

  return (
    <Chart options={options} type='line' series={data} width={width} height={height} />
  );
};

export default LineChart;
