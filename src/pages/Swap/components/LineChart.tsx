import React from 'react';
import Chart from 'react-apexcharts';

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
      height: 350,
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
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    markers: {
      size: 1
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      title: {
        text: 'Month'
      }
    },
    yaxis: {
      title: {
        text: 'Temperature'
      },
      min: 5,
      max: 40
    },
  };

  const series = [
    {
      name: "Low - 2013",
      data: [12, 11, 14, 18, 17, 13, 13]
    }
  ];

  return (
    <Chart options={options} type='line' series={series} />
  );
};

export default LineChart;
