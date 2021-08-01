import React from 'react';
import Chart from 'react-apexcharts';
import moment from 'moment';

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
      borderColor: 'rgba(255, 255, 255, 0.1)',
      row: {
        colors: ['rgba(0, 0, 0, 0.4)'],
      },
    },
    markers: {
      size: 1
    },
    xaxis: {
      categories: Array.from({ length: 24 }).map((val, index) => (moment().subtract((24 - index), "hours")).format("hA")),
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

  const series = [
    {
      name: "24 Hours Price",
      data: [12, 11, 14, 18, 17, 13, 13, 13, 12, 25, 30, 22]
    }
  ];

  return (
    <Chart options={options} type='line' series={series} />
  );
};

export default LineChart;
