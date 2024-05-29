import React from 'react';
import Chart from 'react-apexcharts';

const CandlestickChart = () => {
  const data = [
    { year: 2018, course: 'Edukacja', gender: 'kobiety', status: 'absolwenci', count: 15973 },
    { year: 2019, course: 'Edukacja', gender: 'kobiety', status: 'absolwenci', count: 14445 },
    { year: 2020, course: 'Edukacja', gender: 'kobiety', status: 'absolwenci', count: 13679 },
    { year: 2021, course: 'Edukacja', gender: 'kobiety', status: 'absolwenci', count: 13351 },
    { year: 2022, course: 'Edukacja', gender: 'kobiety', status: 'absolwenci', count: 9474 },
    { year: 2018, course: 'Edukacja', gender: 'kobiety', status: 'studenci', count: 44606 },
    { year: 2019, course: 'Edukacja', gender: 'kobiety', status: 'studenci', count: 40370 },
    { year: 2020, course: 'Edukacja', gender: 'kobiety', status: 'studenci', count: 38532 },
    { year: 2021, course: 'Edukacja', gender: 'kobiety', status: 'studenci', count: 36574 },
    { year: 2022, course: 'Edukacja', gender: 'kobiety', status: 'studenci', count: 33662 },
    { year: 2018, course: 'Edukacja', gender: 'mężczyźni', status: 'absolwenci', count: 2992 },
    { year: 2019, course: 'Edukacja', gender: 'mężczyźni', status: 'absolwenci', count: 2726 },
    { year: 2020, course: 'Edukacja', gender: 'mężczyźni', status: 'absolwenci', count: 2342 },
    { year: 2021, course: 'Edukacja', gender: 'mężczyźni', status: 'absolwenci', count: 2443 },
    { year: 2022, course: 'Edukacja', gender: 'mężczyźni', status: 'absolwenci', count: 2207 },
    { year: 2018, course: 'Edukacja', gender: 'mężczyźni', status: 'studenci', count: 10322 },
    { year: 2019, course: 'Edukacja', gender: 'mężczyźni', status: 'studenci', count: 9474 },
    { year: 2020, course: 'Edukacja', gender: 'mężczyźni', status: 'studenci', count: 9097 },
    { year: 2021, course: 'Edukacja', gender: 'mężczyźni', status: 'studenci', count: 8407 },
    { year: 2022, course: 'Edukacja', gender: 'mężczyźni', status: 'studenci', count: 7771 }
    // Add more data points based on the provided data...
  ];

  // Function to transform data into series format for ApexCharts
  const transformData = (data) => {
    let transformed = {};
    data.forEach((d) => {
      const key = `${d.course} ${d.year}`;
      if (!transformed[key]) {
        transformed[key] = { x: key, y: [d.count, d.count, d.count, d.count] }; // Simplified for demonstration
      } else {
        transformed[key].y = [
          Math.min(transformed[key].y[0], d.count), // Low
          Math.max(transformed[key].y[1], d.count), // High
          Math.min(transformed[key].y[2], d.count), // Open (start of period)
          d.count // Close (end of period)
        ];
      }
    });
    return Object.values(transformed);
  };

  const seriesData = transformData(data);

  const options = {
    chart: {
      type: 'candlestick',
      height: 400,
    },
    title: {
      text: 'Candlestick Chart Example',
      align: 'left'
    },
    xaxis: {
      type: 'category',
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  };

  const series = [{
    name: 'Candlestick',
    data: seriesData
  }];

  return (
    <div>
      <Chart options={options} series={series} type="candlestick" height={350} />
    </div>
  );
};

export default CandlestickChart;
